import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import ReactStars from 'react-stars'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { open } from "../../states/slices/modal_slice";
import { SIGNIN } from "../../helpers/constant";
import axios from "axios";

export default function ProductDetails({ product }) {
  const [active, setActive] = useState("details")
  const [stars, setStars] = useState(0)
  const l = [1, 2, 3, 4]

  const handleRatingChange = (n) => setStars(n)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      headline: '',
      body: ''
    },
    validationSchema: Yup.object({
      headline: Yup.string().required('Required'),
      body: Yup.string().required('Required')
    }),
    onSubmit: async values => {
      values.stars = stars
      // alert(JSON.stringify(values, null, 2));
      const { code_product } = product
      // alert(code_product)
      try {
        console.log(values)
        await axios.post(`/products/${code_product}/add-review`, values)
        alert('review added succesfully')
      } catch (error) {
        if(error?.response?.status == 403) return dispatch(open(SIGNIN))
      }

    },
  });

  return (
    <section className="mt-lg-14 mt-8 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="details">
              <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
                <Nav.Item>
                  <Nav.Link eventKey="details" onClick={() => setActive("details")} className={active === "details" ? "active" : ""}>
                    Product details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="informations" onClick={() => setActive("informations")} className={active === "informations" ? "active" : ""}>
                    Informations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" onClick={() => setActive("reviwes")} className={active === "reviwes" ? "active" : ""}>
                    Reviews
                  </Nav.Link>
                </Nav.Item>
              </ul>
              <Tab.Content>
                <Tab.Pane eventKey="details">
                  <div className="my-8">
                    <div className="mb-5">
                      <h4 className="mb-1">Nutrient Value & Benefits</h4>
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna
                        bibendum
                        in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                        habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                        sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-1">Storage Tips</h5>
                      <p className="mb-0">Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
                        magnis eu
                        nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum
                        netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-1">Unit</h5>
                      <p className="mb-0">3 units</p>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-1">Seller</h5>
                      <p className="mb-0">DMart Pvt. LTD</p>
                    </div>
                    <div>
                      <h5 className="mb-1">Disclaimer</h5>
                      <p className="mb-0">Image shown is a representation and may slightly vary from the actual product. Every
                        effort
                        is made to maintain accuracy of all information displayed.</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="informations">
                  <div className="my-8">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="mb-4">Details</h4>
                      </div>
                      <div className="col-12 col-lg-6">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>Weight</th>
                              <td>{product?.weight}</td>
                            </tr>
                            <tr>
                              <th>Ingredient Type</th>
                              <td>{product?.ingredient_type}</td>
                            </tr>
                            <tr>
                              <th>Brand</th>
                              <td>{product?.brand}</td>
                            </tr>
                            <tr>
                              <th>Item Package Quantity</th>
                              <td>{product?.units}</td>
                            </tr>
                            <tr>
                              <th>Manufacturer</th>
                              <td>{product?.manufacturer}</td>
                            </tr>
                            <tr>
                              <th>Net Quantity</th>
                              <td>{product?.net_quantity}</td>
                            </tr>
                            <tr>
                              <th>Product Dimensions</th>
                              <td>{product?.product_dimensions}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-12 col-lg-6">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>ASIN</th>
                              <td>{product?.ASIN}</td>
                            </tr>
                            <tr>
                              <th>Date First Available</th>
                              <td>{product?.date_first_available}</td>
                            </tr>
                            <tr>
                              <th>Item Weight</th>
                              <td>{product?.weight}</td>
                            </tr>
                            <tr>
                              <th>Generic Name</th>
                              <td>{product?.generic_name}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="reviews">
                  <div className="my-8">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="me-lg-12 mb-6 mb-md-0">
                          <div className="mb-5">
                            <h4 className="mb-3">Customer reviews</h4>
                            <span>
                              <small className="text-warning"> <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i></small><span className="ms-3">4.1 out of 5</span><small
                                  className="ms-3">11,130 global ratings</small></span>
                          </div>
                          <div className="mb-8">
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted"><span
                                className="d-inline-block align-middle text-muted">5</span><i
                                  className="bi bi-star-fill ms-1 small text-warning"></i></div>
                              <div className="w-100">
                                <div className="progress" style={{ "height": "6px" }}>
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "60%" }}
                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div><span className="text-muted ms-3">53%</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted"><span
                                className="d-inline-block align-middle text-muted">4</span><i
                                  className="bi bi-star-fill ms-1 small text-warning"></i></div>
                              <div className="w-100">
                                <div className="progress" style={{ "height": "6px" }}>
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "50%" }}
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                </div>
                              </div><span className="text-muted ms-3">22%</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted"><span
                                className="d-inline-block align-middle text-muted">3</span><i
                                  className="bi bi-star-fill ms-1 small text-warning"></i></div>
                              <div className="w-100">
                                <div className="progress" style={{ "height": "6px" }}>
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "35%" }}
                                    aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
                                </div>
                              </div><span className="text-muted ms-3">14%</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted"><span
                                className="d-inline-block align-middle text-muted">2</span><i
                                  className="bi bi-star-fill ms-1 small text-warning"></i></div>
                              <div className="w-100">
                                <div className="progress" style={{ "height": "6px" }}>
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "22%" }}
                                    aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
                                </div>
                              </div><span className="text-muted ms-3">5%</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted"><span
                                className="d-inline-block align-middle text-muted">1</span><i
                                  className="bi bi-star-fill ms-1 small text-warning"></i></div>
                              <div className="w-100">
                                <div className="progress" style={{ "height": "6px" }}>
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "14%" }}
                                    aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
                                </div>
                              </div><span className="text-muted ms-3">7%</span>
                            </div>
                          </div>
                          <div className="d-grid">
                            <h4>Review this product</h4>
                            <p className="mb-0">Share your thoughts with other customers.</p>
                            <a href="#" className="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-10">
                          <div className="d-flex justify-content-between align-items-center mb-8">
                            <div>
                              <h4>Reviews</h4>
                            </div>
                            <div>
                              <select className="form-select" aria-label="Default select example" defaultValue={"Top Review"}>
                                <option >Top Review</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>

                          </div>
                          {l.map(e =>
                            <div className="d-flex border-bottom pb-6 mb-6" key={e}>
                              <div className="ms-5">
                                <h6 className="mb-1">
                                  Shankar Subbaraman

                                </h6>
                                <p className="small"> <span className="text-muted">30 December 2022</span>
                                  <span className="text-primary ms-3 fw-bold">Verified Purchase</span></p>
                                <div className=" mb-2">
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                </div>

                                <p>Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open
                                  package, there is a possibility of pilferage in between. FreshCart sends the veggies and
                                  fruits through sealed plastic covers and Barcode on the weight etc. .</p>
                                <div>
                                  <div className="border rounded-3 icon-shape icon-lg border-2 ">
                                    <img src="/images/products/product-img-1.jpg" alt=""
                                      className="img-fluid rounded-3" />
                                  </div>
                                  <div className="border rounded-3 icon-shape icon-lg border-2 ms-1 ">
                                    <img src="/images/products/product-img-2.jpg" alt=""
                                      className="img-fluid rounded-3" />
                                  </div>
                                  <div className="border rounded-3 icon-shape icon-lg border-2 ms-1 ">
                                    <img src="/images/products/product-img-3.jpg" alt=""
                                      className="img-fluid rounded-3" />
                                  </div>

                                </div>
                                <div className="d-flex justify-content-end mt-4">
                                  <a href="#" className="text-muted"><i className="feather-icon icon-thumbs-up me-1"></i>Helpful</a>
                                  <a href="#" className="text-muted ms-4"><i className="feather-icon icon-flag me-2"></i>Report
                                    abuse</a>
                                </div>
                              </div>
                            </div>
                          )}
                          <div>
                            <a href="#" className="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
                          </div>

                        </div>
                        <div>
                          <h3 className="mb-5">Create Review</h3>

                          <form onSubmit={formik.handleSubmit}>

                            <ReactStars
                              count={5}
                              half={false}
                              value={stars}
                              size={24}
                              color2={'#ffd700'}
                              onChange={handleRatingChange}
                            />
                            <div className="border-bottom py-4 mb-4">
                              <h5>Add a headline</h5>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="What’s most important to know"
                                name="headline"
                                onChange={formik.handleChange}
                                onBlur={formik.hanldeBlur}
                                value={formik.values.headline}
                              />
                              {formik.touched.headline && formik.errors.headline ? (
                                <small className='text-danger'>{formik.errors.headline}</small>
                              ) : null}

                            </div>
                            <div className=" py-4 mb-4">
                              <h5>Add a written review</h5>
                              <textarea
                                className="form-control" rows="3"
                                placeholder="What did you like or dislike? What did you use this product for?"
                                name="body"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.body}
                              />
                              {formik.touched.body && formik.errors.body ? (
                                <small className='text-danger'>{formik.errors.body}</small>
                              ) : null}

                            </div>
                            <div className="d-flex justify-content-end">
                              <button className="btn btn-primary" type="submit">Submit Review</button>
                            </div>
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>



    </section>
  )
}
