import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../helpers/constant";
import { open } from "../../states/slices/modal_slice";
import Toggler from "./toggler";

export default function Payament({ selectedAddress, deliveryInstructionsRef }) {

  const router = useRouter()
  const dispatch = useDispatch()
  const handlePlaceOrder = async () => {
    try {
      await axios.post('/orders/add-new-order', {
        id_address : selectedAddress,
        delevery_instructions : deliveryInstructionsRef.current.value || '',
        payement_method : selectedPayementMethod || 'Cash on Delivery'
      })
      return router.push('/account/orders')
    } catch (error) {
      if (error?.response?.status === 403) return dispatch(open(SIGNIN))
    }
  }

  const [selectedPayementMethod, setselectedPayementMethod] = useState()

  const handleChanges = (e) => {
    setselectedPayementMethod(e.target.value)
  }

  return (
    <>
      <Toggler eventKey="3">
        <div className="py-4">
          <a href="#" className="text-inherit h5">
            <i className="feather-icon icon-credit-card me-2 text-muted"></i>Payment Method
          </a>
        </div>
      </Toggler>
      <Accordion.Collapse eventKey="3">
        <div id="flush-collapseFour" className="accordion-collapse collapse show"
          data-bs-parent="#accordionFlushExample">

          <div className="mt-5">
            <form>

              <div className="card card-bordered shadow-none mb-2">
                <div className="card-body p-6">
                  <div className="d-flex">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" value="Paypal" id="paypal" onChange={handleChanges} />
                      <label className="form-check-label ms-2" htmlFor="paypal">

                      </label>
                    </div>
                    <div>
                      <h5 className="mb-1 h6"> Payment with Paypal</h5>
                      <p className="mb-0 small">You will be redirected to PayPal website to complete your purchase
                        securely.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-bordered shadow-none mb-2">
                <div className="card-body p-6">
                  <div className="d-flex">
                    <div className="form-check">
                      <input name="flexRadioDefault" className="form-check-input" type="radio" id="payoneer" value="Payoneer" onChange={handleChanges} />
                      <label className="form-check-label ms-2" htmlFor="payoneer">

                      </label>
                    </div>
                    <div>
                      <h5 className="mb-1 h6"> Pay with Payoneer</h5>
                      <p className="mb-0 small">You will be redirected to Payoneer website to complete your
                        purchase securely.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-bordered shadow-none">
                <div className="card-body p-6">
                  <div className="d-flex">
                    <div className="form-check">

                      <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleChanges} defaultChecked={true} value={"Cash on Delivery"} />

                      <label className="form-check-label ms-2" htmlFor="cashonDelivery">
                      </label>
                    </div>
                    <div>
                      <h5 className="mb-1 h6"> Cash on Delivery</h5>
                      <p className="mb-0 small">Pay with cash when your order is delivered.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex justify-content-end">
                <a href="#" className="btn btn-outline-gray-400 text-muted"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                  aria-controls="flush-collapseThree">Prev</a>
                <a href="#" className="btn btn-primary ms-2" onClick={handlePlaceOrder}>Place Order</a>
              </div>
            </form>
          </div>
        </div>
      </Accordion.Collapse>
    </>
  )
}
