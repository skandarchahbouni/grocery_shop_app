import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BASE_URL_IMAGES from "../../helpers/base_url_images"
import { addProductToCart, addProductToWishlist, decrementProductQuantityInCart, incrementProductQuantityInCart, removeProductFromCart, removeProductFromWishlist } from "../../helpers/common_functions"

export default function SingleProductCard({ product }) {

    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.value)
    const { code_product, price, quantity_in_stock, lien_photo, photos } = product

    const existInWishlist = wishlist.find(product => product.code_product === code_product)
    const heartClassName = existInWishlist ? "btn btn-light m-1 bg-primary text-white" : "btn btn-light m-1"

    const handleAddOrReomveFromWislist = async () => {
        if (!existInWishlist) {
            return addProductToWishlist(product, dispatch)
        }
        return removeProductFromWishlist(code_product, dispatch)
    }



    const cart = useSelector(state => state.cart.value)
    const existInCart = cart.find(product => product.code_product === code_product)

    const [mainImage, setMainImage] = useState(photos[0])

    const [quantity, setQuantity] = useState(1)



    return (
        <section className="mt-8">
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product">
                                <div
                                    className="zoom"
                                    onmousemove="zoom(event)"
                                    style={{ backgroundImage: `url(${BASE_URL_IMAGES}/${mainImage})` }}
                                >
                                    <img
                                        src={BASE_URL_IMAGES + "/" + mainImage}
                                        alt=""
                                    />
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="product-tools">
                                <div className="thumbnails row g-3">
                                    {photos.length > 0 && photos.map(photo =>
                                        <div className="col-3" key={photo}>
                                            <div className="thumbnails-img" style={{ "cursor": "pointer" }} onClick={() => setMainImage(photo)}>
                                                <img
                                                    src={`${BASE_URL_IMAGES}/${photo}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ps-lg-8 mt-6 mt-lg-0">
                                <a href="#!" className="mb-4 d-block">{product?.category_name}</a>
                                <h2 className="mb-1 h1">{product?.name}</h2>
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
                                    <span className="fw-bold text-dark">${product?.price - 0.26 * product?.price}</span>
                                    <span className="text-decoration-line-through text-muted ms-2">
                                        ${product?.price}
                                    </span>
                                    <span>
                                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                                    </span>
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
                                    {!existInCart && 
                                        <div className="input-group input-spinner  ">
                                            <input type="button" defaultValue="-" disabled={quantity <= 1} className="button-minus  btn  btn-sm " onClick={()=> setQuantity(prv => prv - 1)} />
                                            <span className="quantity-field form-control-sm form-input">{quantity}</span>
                                            <input type="button" defaultValue="+" className="button-plus btn btn-sm " onClick={()=> setQuantity(prv => prv + 1)} />
                                        </div>
                                    }
                                </div>
                                <div
                                    className="mt-3 row justify-content-start g-2 align-items-center"
                                >
                                    {!existInCart ?
                                        <div className="col-lg-4 col-md-5 col-6 d-grid" onClick={() => addProductToCart({...product, quantity}, dispatch)}>
                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2"></i>Add to cart
                                            </button>
                                        </div>
                                        :
                                        <div className="col-lg-4 col-md-5 col-6 d-grid" onClick={() => removeProductFromCart(code_product, dispatch)}>
                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2"></i>Remove from cart
                                            </button>
                                        </div>
                                    }
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
                                        ><i className="feather-icon icon-heart"></i
                                        ></a>
                                    </div>
                                </div>
                                <hr className="my-6" />
                                <div>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>Product Code:</td>
                                                <td>{product?.code_product}</td>
                                            </tr>
                                            <tr>
                                                <td>Availability:</td>
                                                <td>{product?.quantity_in_stock > 0 ? "In stock" : "out of stock"}</td>
                                            </tr>
                                            <tr>
                                                <td>Ingredient type:</td>
                                                <td>{product?.ingredient_type}</td>
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
                </div>
            </div>
        </section>
    )
}
