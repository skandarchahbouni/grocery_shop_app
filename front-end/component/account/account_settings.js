import axios from "axios"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { SIGNIN } from "../../helpers/constant"
import { open } from "../../states/slices/modal_slice"

export default function SettingsAccount() {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleDeleteAccount = async () => {
    try {
      await axios.delete('/account')
      return router.replace('/signin')
    } catch (error) {
      if (error?.response?.status == 403) return dispatch(open(SIGNIN))
    }
  }
  return (
    <div className="col-lg-9 col-md-8 col-12">
      <div className="py-6 p-md-6 p-lg-10">
        <div className="mb-6">
          <h2 className="mb-0">Account Setting</h2>
        </div>
        <div>
          <h5 className="mb-4">Account details</h5>
          <div className="row">
            <div className="col-lg-5">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="jitu chauhan" />
                </div>
                <div className="mb-5">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary">Save Details</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="pe-lg-14">
          <h5 className="mb-4">Password</h5>
          <form className=" row row-cols-1 row-cols-lg-2">
            <div className="mb-3 col">
              <label className="form-label">New Password</label>
              <input type="password" className="form-control" placeholder="**********" />
            </div>
            <div className="mb-3 col">
              <label className="form-label">Current Password</label>
              <input type="password" className="form-control" placeholder="**********" />
            </div>
            <div className="col-12">
              <p className="mb-4">Can’t remember your current password?<a href="#"> Reset your password.</a></p>
              <a href="#" className="btn btn-primary">Save Password</a>
            </div>
          </form>
        </div>
        <hr className="my-10" />
        <div>
          <h5 className="mb-4">Delete Account</h5>
          <p className="mb-2">Would you like to delete your account?</p>
          <p className="mb-5">This account contain 12 orders, Deleting your account will remove all the order details
            associated with it.</p>

          <a href="#" className="btn btn-outline-danger" onClick={handleDeleteAccount}>I want to delete my account</a>
        </div>
      </div>
    </div>
  )
}
