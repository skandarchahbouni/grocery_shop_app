import Payement_And_Delivery from "../component/checkout/delivery_&_payement";
import OrderDetails from "../component/checkout/order_details";
import BreadCrumb from "../component/shared/breadcrumb";
import Footer from "../component/shared/footer";
import NavBar from "../component/shared/navbar";

export default function CheckoutPage() {
    return (
        <>
            <NavBar />
            <main>
                <BreadCrumb />
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <div className="mb-8">
                                        <h1 className="fw-bold mb-0">Checkout</h1>
                                        <p className="mb-0">Already have an account? Click here to <a href="#!">Sign in</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="row">
                                <Payement_And_Delivery />
                                <OrderDetails />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
