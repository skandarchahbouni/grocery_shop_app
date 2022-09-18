export default function AccountNotifications() {
  return (
    <div className="col-lg-9 col-md-8 col-12">
    <div className="py-6 p-md-6 p-lg-10">
      <div className="mb-6">
        <h2 className="mb-0">Notification settings</h2>

      </div>

      <div className="mb-10">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Email Notifications</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h6 className="mb-1">Weekly Notification</h6>
            <p className="mb-0 ">Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose .</p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Account Summary</h6>
            <p className="mb-0 pe-12 ">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
              turpis eguris eu sollicitudin massa. Nulla
              ipsum odio, aliquam in odio et, fermentum blandit nulla.
            </p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
            <label className="form-check-label" for="flexSwitchCheckChecked"></label>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Order updates</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h6 className="mb-0">Text messages</h6>

          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" />
            <label className="form-check-label" for="flexSwitchCheckDefault2"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Call before checkout</h6>
            <p className="mb-0 ">We'll only call if there are pending changes
            </p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" defaultChecked />
            <label className="form-check-label" for="flexSwitchCheckChecked2"></label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Website Notification</h5>
        </div>
        <div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckFollower" defaultChecked />
            <label className="form-check-label" for="flexCheckFollower">
              New Follower
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckPost" />
            <label className="form-check-label" for="flexCheckPost">
              Post Like
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckPosted" />
            <label className="form-check-label" for="flexCheckPosted">
              Someone you followed posted
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckCollection" />
            <label className="form-check-label" for="flexCheckCollection">
              Post added to collection
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckOrder" />
            <label className="form-check-label" for="flexCheckOrder">
              Order Delivery
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
