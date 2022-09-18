import { useSelector } from "react-redux";
import CartSingleProduct from "./cart_single_product";
import Summary from "./summary";

export default function CartProducts() {
    const cart = useSelector(state => state.cart.value)
    return (
        <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card py-1 border-0 mb-8">
                            <div>
                                <h1 className="fw-bold">Shop Cart</h1>
                                <p className="mb-0">Shopping in 382480</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-7">

                        <div className="py-3">
                            <div className="alert alert-danger p-2" role="alert">
                                You’ve got FREE delivery. Start <a href="#!" className="alert-link">checkout now!</a>
                            </div>
                            <ul className="list-group list-group-flush">
                                {cart.length > 0 && cart.map(product => 
                                    <CartSingleProduct 
                                        key={product?.code_product}
                                        code_product={product?.code_product}
                                        name={product?.name}
                                        price={product?.price}
                                        lien_photo={product?.lien_photo}
                                        category_name={product?.category_name}
                                        quantity={product?.quantity}
                                    />
                                )}
                            </ul>
                        </div>
                    </div>
                    <Summary />
                </div>
            </div>
        </section>
    )
}
