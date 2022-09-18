import { useDispatch } from "react-redux";
import BASE_URL_IMAGES from "../../helpers/base_url_images";
import { decrementProductQuantityInCart, incrementProductQuantityInCart, removeProductFromCart } from "../../helpers/common_functions";

export default function CartSingleProduct({ code_product, name, price, lien_photo, category_name, quantity }) {

    const dispatch = useDispatch()

    return (
        <li className="list-group-item py-3 py-lg-0 px-0 border-top">
            <div className="row align-items-center">
                <div className="col-3 col-md-2">
                    <img src={BASE_URL_IMAGES + '/' + lien_photo} alt="Ecommerce"
                        className="img-fluid" /></div>
                <div className="col-4 col-md-5">
                    <a href="shop-single.html" className="text-inherit"><h6 className="mb-0">{name}</h6></a>
                    <span><small className="text-muted">{category_name}</small></span>
                    <div className="mt-2 small lh-1"> <a href="#!" className="text-decoration-none text-inherit"> <span
                        className="me-1 align-text-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="feather feather-trash-2 text-success">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg></span><span className="text-muted" onClick={()=> removeProductFromCart(code_product ,dispatch)}>Remove</span></a></div>
                </div>
                <div className="col-3 col-md-3 col-lg-2">
                    <div className="input-group input-spinner  ">
                        <input
                            type="button"
                            value="-"
                            className="button-minus  btn  btn-sm "
                            disabled={quantity <= 1}
                            onClick={() => decrementProductQuantityInCart(code_product, dispatch)}
                        />
                        <span className="quantity-field form-control-sm form-input">{quantity}</span>
                        <input
                            type="button"
                            value="+"
                            className="button-plus btn btn-sm "
                            onClick={() => incrementProductQuantityInCart(code_product, dispatch)}
                        />
                    </div>


                </div>
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">${price}</span>

                </div>
            </div>

        </li>
    )
}
