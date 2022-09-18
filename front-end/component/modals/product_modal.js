import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL_IMAGES from '../../helpers/base_url_images';
import { addToWishlist, removeFromWishlist } from '../../states/slices/wishlist_slice';

export default function ProductModal({ product }) {
    const {code_product, name : product_name, category_name : category, photos, quantity_in_stock, price} = product

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const router = useRouter()

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist.value)

    const exist = wishlist.find(product => product.code_product === code_product)
    const heartClassName = exist ? "btn btn-light m-1 bg-primary text-white" : "btn btn-light m-1"

    const handleAddOrReomveFromWislist = async () => {
        if (!exist) {
            try {
                await axios.post("/wishlist/add-product", { code_product })
            } catch (error) {
                if (error?.response?.status === 403) {
                    return router.replace('/signin')
                }
            }
            return dispatch(addToWishlist({
                code_product, price, quantity_in_stock, img: lien_photo
            }))
        }
        try {
            await axios.delete(`/wishlist/${code_product}/remove-product`)
        } catch (error) {
            if (error?.response?.status === 403) {
                return router.replace('/signin')
            }
        }
        dispatch(removeFromWishlist(code_product))
    }
    

    return (
        <>
            <span className="btn-action m-1" style={{ 'cursor': 'pointer' }} onClick={handleOpen}><i
                className="bi bi-eye" title="Quick View"></i></span>
            <Modal show={show} centered={true} size="xl">
                <Modal.Body className='p-8'>
                    <div className="position-absolute top-0 end-0 me-3 mt-3">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product productModal" id="productModal">
                                <div
                                    className="zoom"
                                    onmousemove="zoom(event)"
                                    style={{ "backgroundImage": "url(/images/products/product-single-img-1.jpg)" }}
                                >
                                    <img
                                        src="/images/products/product-single-img-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="product-tools">
                                <div className="thumbnails row g-3" id="productModalThumbnails">
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img
                                                src="/images/products/product-single-img-1.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img
                                                src="/images/products/product-single-img-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img
                                                src="/images/products/product-single-img-3.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="thumbnails-img">
                                            <img
                                                src="/images/products/product-single-img-4.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ps-lg-8 mt-6 mt-lg-0">
                                <a href="#!" className="mb-4 d-block">{category}</a>
                                <h2 className="mb-1 h1">{product_name}</h2>
                                <div className="mb-4">
                                    <small className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i></small
                                    ><a href="#" className="ms-2">(30 reviews)</a>
                                </div>
                                <div className="fs-4">
                                    <span className="fw-bold text-dark">${price - 0.26 * price}</span>
                                    <span className="text-decoration-line-through text-muted ms-2">${price}</span
                                    ><span
                                    ><small className="fs-6 ms-2 text-danger">26% Off</small></span
                                    >
                                </div>
                                <hr className="my-6" />
                                <div className="mb-4 m-1">
                                    <button type="button" className="btn btn-outline-secondary">
                                        250g
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-1">
                                        500g
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-1">
                                        1kg
                                    </button>
                                </div>
                                <div>
                                    <div className="input-group input-spinner  ">
                                        <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" />
                                        <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                        <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                    </div>
                                </div>
                                <div
                                    className="mt-3 row justify-content-start g-2 align-items-center"
                                >

                                    <div className="col-lg-4 col-md-5 col-6 d-grid">
                                        <button type="button" className="btn btn-primary">
                                            <i className="feather-icon icon-shopping-bag me-2"></i>Add to
                                            cart
                                        </button>
                                    </div>
                                    <div className="col-md-4 col-5">
                                        <a
                                            className="btn btn-light m-1"
                                            href="#"
                                            data-bs-toggle="tooltip"
                                            data-bs-html="true"
                                            aria-label="Compare"
                                        ><i className="bi bi-arrow-left-right"></i
                                        ></a>
                                        <a
                                            className={heartClassName}
                                            onClick={handleAddOrReomveFromWislist}
                                        ><i className="feather-icon icon-heart"></i>
                                        </a>
                                    </div>
                                </div>
                                <hr className="my-6" />
                                <div>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>Product Code:</td>
                                                <td>{code_product}</td>
                                            </tr>
                                            <tr>
                                                <td>Availability:</td>
                                                <td>{quantity_in_stock > 0 ? "In stock" : "Out of stock"}</td>
                                            </tr>
                                            <tr>
                                                <td>Type:</td>
                                                <td>{category}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping:</td>
                                                <td>
                                                    <small
                                                    >01 day shipping.<span className="text-muted"
                                                    >( Free pickup today)</span
                                                        ></small
                                                    >
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

