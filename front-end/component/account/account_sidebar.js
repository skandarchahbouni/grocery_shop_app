import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AccountSideBar() {
  const router = useRouter()
  const { pathname } = router
  const current_route = pathname.split('/')[2]
  const logout = async () => {
    try {
      await axios.get("/auth/logout")
      return router.replace("/signin")
    } catch (error) {
      
    }
  }
  return (
    <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
      <div className="pt-10 pe-lg-10">
        <ul className="nav flex-column nav-pills nav-pills-dark">
          <li className="nav-item">
            <Link href={"/account/orders"}>
              <a className={current_route == 'orders' ? "nav-link active" : "nav-link"}>
                <i className="feather-icon icon-shopping-bag me-2"></i>Your Orders
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/settings">
              <a className={current_route == 'settings' ? "nav-link active" : "nav-link"}>
                <i className="feather-icon icon-settings me-2"></i>Settings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/addresses">
              <a className={current_route == 'addresses' ? "nav-link active" : "nav-link"}><i
                className="feather-icon icon-map-pin me-2"></i>Address
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/payement-methods">
              <a className={current_route == 'payement-methods' ? "nav-link active" : "nav-link"}><i
                className="feather-icon icon-credit-card me-2"></i>Payment Method
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/account/notifications">
              <a className={current_route == 'notifications' ? "nav-link active" : "nav-link"}><i
                className="feather-icon icon-bell me-2"></i>Notification
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <hr />
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{"cursor" : "pointer"}} onClick={logout}><i className="feather-icon icon-log-out me-2"></i>Log out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
