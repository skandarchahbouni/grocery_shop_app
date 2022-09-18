import { useSelector } from "react-redux"
import BASE_URL_IMAGES from "../../helpers/base_url_images"

export default function OrderDetails() {
    const cart = useSelector(state => state.cart.value)
    let subtotal = 0
    cart.forEach(product => {
        subtotal += Number(product.quantity) * Number(product.price)
    });
    const fees = 3

    return (
        <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
            <div className="mt-4 mt-lg-0">
                <div className="card shadow-sm">
                    <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                    <ul className="list-group list-group-flush">
                        {cart.map(product => (
                            <li className="list-group-item px-4 py-3" key={product?.code_product}>
                                <div className="row align-items-center">
                                    <div className="col-2 col-md-2">
                                        <img src={BASE_URL_IMAGES + '/' + product?.lien_photo} alt="Ecommerce" className="img-fluid" /></div>
                                    <div className="col-5 col-md-5">
                                        <h6 className="mb-0">{product?.name}</h6>
                                        <span><small className="text-muted">{product?.category_name}</small></span>

                                    </div>
                                    <div className="col-2 col-md-2 text-center text-muted">
                                        <span>{product?.quantity}</span>

                                    </div>
                                    <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                        <span className="fw-bold">${product?.price}</span>

                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className="list-group-item px-4 py-3">
                            <div className="d-flex align-items-center justify-content-between   mb-2">
                                <div>
                                    Item Subtotal
                                </div>
                                <div className="fw-bold">
                                    ${subtotal}
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between  ">
                                <div>
                                    Service Fee <i className="feather-icon icon-info text-muted"></i>
                                </div>
                                <div className="fw-bold">
                                    ${fees}
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item px-4 py-3">
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                <div>
                                    Total
                                </div>
                                <div>
                                    ${subtotal + fees}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
