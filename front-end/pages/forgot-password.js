export default function ForgotPasswordPage() {
    return (
        <main>
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                            <img src="/images/svg-graphics/fp-g.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                            <div>
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                                    <p>Please enter the email address associated with your account and We will email you a link to reset your
                                        password.</p>
                                </div>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                                        </div>

                                        <div className="col-12 d-grid gap-2"> <button type="submit" className="btn btn-primary">Reset Password</button>
                                            <a href="signup.html" className="btn btn-light">Back</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
