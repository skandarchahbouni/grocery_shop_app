export default function AccountPayementMethods() {
    const l = [1, 2, 3, 4]
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <div className="d-flex justify-content-between mb-6 align-items-center">
                    <h2 className="mb-0">Payment Methods</h2>
                    <a href="#" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">Add
                        Payment </a>

                </div>
                <ul className="list-group list-group-flush">
                    {l.map(e => (
                        <li className="list-group-item py-5 px-0" key={e}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="/images/svg-graphics/mastercard.svg" alt="" />
                                    <div className="ms-4">
                                        <h5 className="mb-0 h6 h6">**** 1234</h5>
                                        <p className="mb-0 small">Expires in 10/2023
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <a href="#" className="btn btn-outline-gray-400 btn-sm">Remove</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
