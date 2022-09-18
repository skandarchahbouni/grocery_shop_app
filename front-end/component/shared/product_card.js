import { useDispatch, useSelector } from "react-redux"
import BASE_URL_IMAGES from "../../helpers/base_url_images"
import ProductModal from "../modals/product_modal"
import { addProductToCart, addProductToWishlist, removeProductFromCart, removeProductFromWishlist } from "../../helpers/common_functions"
import Link from "next/link"

export default function ProductCard({ product }) {
    const { code_product, price, name: product_name, lien_photo: img, category_name: category, quantity_in_stock } = product

    const dispatch = useDispatch()
    
    const wishlist = useSelector(state => state.wishlist.value)

    
    const existInWishlist = wishlist.find(product => product.code_product === code_product)
    const heartClassName = existInWishlist ? "btn-action m-1 bg-primary text-white" : "btn-action m-1"

    const handleAddOrReomveFromWislist = async () => { 
        const existInWishlist = wishlist.find(product => product.code_product === code_product)
        if (!existInWishlist) {
            return addProductToWishlist(product, dispatch)
        }
        return removeProductFromWishlist(code_product, dispatch) 
    }

    const cart = useSelector(state => state.cart.value)
    const existInCart = cart.find(product => product.code_product === code_product)

    return (
        <div className="col">
            <div className="card card-product">
                <div className="card-body">
                    <div className="text-center position-relative">
                        <div className=" position-absolute top-0 start-0">
                            <span className="badge bg-success">14%</span>
                        </div>
                        <Link href={`products/${code_product}`}>
                            <a ><img src={`${BASE_URL_IMAGES}/${img}`}
                                alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                            </a>
                        </Link>

                        <div className="card-product-action">
                            <ProductModal product={product} />
                            <span className={heartClassName} style={{ 'cursor': 'pointer' }} onClick={handleAddOrReomveFromWislist}
                                title="Wishlist"><i className="bi bi-heart"></i></span>
                            <span className="btn-action m-1" style={{ 'cursor': 'pointer' }}><i
                                className="bi bi-arrow-left-right"></i></span>
                        </div>

                    </div>
                    <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>{category}</small></a></div>
                    <h2 className="fs-6"><a href="./pages/shop-single.html"
                        className="text-inherit text-decoration-none">{product_name} </a></h2>
                    <div className="text-warning">

                        <small> <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (25)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div><span className="text-dark">${price}</span>
                        </div>
                        {!existInCart ?
                            <div onClick={() => addProductToCart(product, dispatch)}><a href="#!" className="btn btn-primary btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="feather feather-plus">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg> Add</a></div>
                            :
                            <div onClick={() => removeProductFromCart(code_product, dispatch)}><a href="#!" className="btn btn-primary btn-sm"> Remove</a></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
