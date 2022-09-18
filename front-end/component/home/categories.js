import Link from "next/link";

export default function Categories() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 ">

                        <div>
                            <div className="py-10 px-8 rounded-3"
                                style={{ "background": "url(/images/banner/grocery-banner.png)no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }}>
                                <div>
                                    <h3 className="fw-bold mb-1">Freshly Baked
                                        Buns
                                    </h3>
                                    <p className="mb-4">Get Upto <span className="fw-bold">25%</span> Off</p>
                                    <Link href="/products">
                                        <a href="#!" className="btn btn-dark">Shop Now</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">

                        <div>
                            <div className="py-10 px-8 rounded-3"
                                style={{ "background": "url(/images/banner/grocery-banner-2.jpg)no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }}>
                                <div>
                                    <h3 className="fw-bold mb-1">Freshly Baked
                                        Buns
                                    </h3>
                                    <p className="mb-4">Get Upto <span className="fw-bold">25%</span> Off</p>
                                    <Link href="/products">
                                    <a href="#!" className="btn btn-dark">Shop Now</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
