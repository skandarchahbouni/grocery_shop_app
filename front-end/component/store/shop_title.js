export default function ShopTitle() {
    return (
        <div
        className="mb-8 bg-light rounded-3 d-lg-flex justify-content-lg-between"
      >
        <div className="align-self-center p-8">
          <div className="mb-3">
            <h5 className="mb-0 fw-bold">E-Grocery Super Market</h5>
            <p className="mb-0 text-muted">
              Whatever the occasion, we've got you covered.
            </p>
          </div>
          <div className="position-relative">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search E-Grocery Super Market"
            />
            <span className="position-absolute end-0 top-0 mt-2 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>
        <div className="py-4">
          <img
            src="/images/svg-graphics/store-graphics.svg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    )
}
