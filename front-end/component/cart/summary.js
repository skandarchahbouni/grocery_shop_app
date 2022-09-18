import Link from "next/link";
import { useSelector } from "react-redux"

export default function Summary() {
  const cart = useSelector(state => state.cart.value)
  let subtotal = 0
  cart.forEach(product => {
    subtotal += Number(product.quantity) * Number(product.price)
  });

  const fees = cart.length > 0 ? 3 : 0

  return (
    <div className="col-12 col-lg-4 col-md-5">
      <div className="mb-5 card mt-6">
        <div className="card-body p-6">
          <h2 className="h5 mb-4">Summary</h2>
          <div className="card mb-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div>Subtotal</div>
                </div>
                <span>${subtotal}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div>Service Fee</div>
                </div>
                <span>${fees}.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">Total</div>

                </div>
                <span className="fw-bold">${subtotal + fees}</span>
              </li>
            </ul>

          </div>
          <div className="d-grid mb-1 mt-4">
            <Link href="/checkout">
              <span className="btn btn-primary btn-lg d-flex justify-content-between align-items-center">
                Go to Checkout <span className="fw-bold">${subtotal + fees}</span>
              </span>
            </Link>
          </div>
          <p><small>By placing your order, you agree to be bound by the Freshcart <a href="#!">Terms of Service</a>
            and <a href="#!">Privacy Policy.</a> </small></p>

          <div className="mt-8">
            <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
            <form>
              <div className="mb-2">
                <label for="giftcard" className="form-label sr-only">Email address</label>
                <input type="text" className="form-control" id="giftcard" placeholder="Promo or Gift Card" />

              </div>
              <div className="d-grid"><button type="submit" className="btn btn-outline-dark mb-1">Redeem</button></div>
              <p className="text-muted mb-0"> <small>Terms & Conditions apply</small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
