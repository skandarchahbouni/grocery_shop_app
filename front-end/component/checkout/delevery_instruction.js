import { Accordion } from "react-bootstrap";
import Toggler from "./toggler";

export default function DeliveryInstruction({ deliveryInstructionsRef }) {
    return (
        <>
            <Toggler eventKey="2">
                <div className="py-4">
                    <a className="text-inherit h5 py-4">
                        <i className="feather-icon icon-shopping-bag me-2 text-muted"></i>Delivery instructions
                    </a>
                </div>
            </Toggler>
            <Accordion.Collapse eventKey="2">
                <div id="flush-collapseThree" className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample">

                    <div className="mt-5">
                        <label for="DeliveryInstructions" className="form-label sr-only">Delivery instructions</label>
                        <textarea className="form-control" id="DeliveryInstructions" rows="3"
                            placeholder="Write delivery instructions " ref={deliveryInstructionsRef}></textarea>
                        <p className="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                        <div className="mt-5 d-flex justify-content-end">
                            <a href="#" className="btn btn-outline-gray-400 text-muted"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">Prev</a>
                            <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">Next</a>
                        </div>
                    </div>
                </div>
            </Accordion.Collapse>
        </>
    )
}
