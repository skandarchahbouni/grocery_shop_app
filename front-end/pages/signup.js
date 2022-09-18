import SignUpCard from "../component/signup/signup_card";

export default function SignUp() {
    return (
        <main>
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                            <img src="/images/svg-graphics/signup-g.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                            <div className="mb-lg-9 mb-5">
                                <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                                <p>Welcome to FreshCart! Enter your email to get started.</p>
                            </div>
                            <SignUpCard />
                        </div>
                    </div>
                </div>


            </section>
        </main>
    )
}
