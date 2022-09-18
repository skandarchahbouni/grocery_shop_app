import { Accordion } from "react-bootstrap";
import Toggler from "./toggler";

export default function DeleveryTime() {
    const l = [1, 2, 3, 4, 5, 6, 7]
    const m = [1, 2, 3, 4, 5]


    return (
        <>
            <Toggler eventKey="1">
            <div className="py-4" eventKey="1">
                <a className="text-inherit collapsed h5">
                    <i className="feather-icon icon-clock me-2 text-muted"></i>Delivery time
                </a>
            </div>
            </Toggler>
            <Accordion.Collapse eventKey="1">
                <div id="flush-collapseTwo" className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample">
                    {/* Line 1 */}
                    <ul className="nav nav-pills nav-pills-light mb-3 nav-fill mt-5" id="pills-tab" role="tablist">
                        {l.map(e => (
                            <li className="nav-item" role="presentation" key={e}>
                                <button className="nav-link" id="pills-today-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-today" type="button" role="tab" aria-controls="pills-today"
                                    aria-selected="true">Today <br /><small>Oct 3</small>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Show active */}
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-today" role="tabpanel"
                            aria-labelledby="pills-today-tab" tabIndex="0">
                            <ul className="list-group list-group-flush mt-4">
                                {m.map(e => (
                                    <li className="list-group-item  d-flex justify-content-between align-items-center px-0 py-3" key={e}>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    <span>Within 2 Hours</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-3 text-center">$3.99</div>
                                        <div className="col-3 text-center"> <span className="badge bg-danger">Paid</span></div>
                                        <div className="col-2 text-end"> <a href="#"
                                            className="btn btn-outline-gray-400 btn-sm text-muted">Choose</a></div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-end">
                        <a href="#" className="btn btn-outline-gray-400 text-muted"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">Prev</a>
                        <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">Next</a>
                    </div>
                </div>
            </Accordion.Collapse>
        </>
    )
}
