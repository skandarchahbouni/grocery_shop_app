import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { close, open } from '../../states/slices/modal_slice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { SIGNIN } from '../../helpers/constant';
import { useRouter } from 'next/router';

export default function AddAddressModal() {
    const dispatch = useDispatch()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            address_line_1: '',
            address_line_2: '',
            city: '',
            id_country: '',
            zip_code: '',
            business_name: '',
            isDefault : false
        },
        validationSchema: Yup.object({
            address_line_1: Yup.string('Invalid address line').required('Required'),
            address_line_2: Yup.string('Invalid address line'),
            city: Yup.string().required('Required'),
            id_country: Yup.string().required('Required'),
            zip_code: Yup.number('Invalid zip code').required('Required'),
            business_name: Yup.string('').required('Required')
        }),
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                await axios.post('/addresses/add-new-address', values)
                dispatch(close())
                router.reload()
            } catch (error) {
                if (error?.response?.status === 403) {
                    dispatch(close())
                    return dispatch(open(SIGNIN))
                }
                console.log(error)
            }
        },
    });

    return (
        <>
            <Modal.Body>
                <div className="d-flex justify-content-between mb-5">
                    <div>
                        <h5 className="h6 mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                        <p className="small mb-0">Add new shipping address for your order delivery.</p>
                    </div>
                    <div>
                        <button type="button" className="btn-close" onClick={() => dispatch(close())}></button>
                    </div>
                </div>
                <form className="row g-3" onSubmit={formik.handleSubmit}>

                    <div className="col-12">
                        <input
                            type="text"
                            name="address_line_1"
                            className="form-control"
                            placeholder="Address Line 1"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address_line_1}
                        />
                        {formik.touched.address_line_1 && formik.errors.address_line_1 ? (
                            <small className='text-danger'>{formik.errors.address_line_1}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                    <input
                            type="text"
                            name="address_line_2"
                            className="form-control"
                            placeholder="Address Line 2"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address_line_2}
                        />
                        {formik.touched.address_line_2 && formik.errors.address_line_2 ? (
                            <small className='text-danger'>{formik.errors.address_line_2}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="city"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <small className='text-danger'>{formik.errors.city}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <select className="form-select" name="id_country" onChange={formik.handleChange} defaultValue="">
                            <option value="" disabled> Country</option>
                            <option value="1">Algeria</option>
                            <option value="2">Fench</option>
                            <option value="3">Germani</option>
                            <option value="4">Tunisia</option>
                        </select>
                        {formik.touched.id_country && formik.errors.id_country ? (
                            <small className='text-danger'>{formik.errors.id_country}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <select className="form-select" name="city" onChange={formik.handleChange} defaultValue="">
                            <option value="" disabled>City</option>
                            <option value="Boumerdes">Boumerdes</option>
                            <option value="Thenia">Thenia</option>
                            <option value="Isser"> Isser</option>
                            <option value="Borj mnayel">Borj mnayel</option>
                        </select>
                        {formik.touched.city && formik.errors.city ? (
                            <small className='text-danger'>{formik.errors.city}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Zip Code"
                            name="zip_code"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.zip_code}
                        />
                        {formik.touched.zip_code && formik.errors.zip_code ? (
                            <small className='text-danger'>{formik.errors.zip_code}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Business Name"
                            name="business_name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.business_name}
                        />
                        {formik.touched.business_name && formik.errors.business_name ? (
                            <small className='text-danger'>{formik.errors.business_name}</small>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                name="isDefault"
                                id="flexCheckBox"
                                value={formik.isDefault}
                                onChange={formik.handleChange}
                            />
                            <label className="form-check-label" htmlFor='flexCheckBox'>
                                Set as Default
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-end">
                        <button type="button" className="btn btn-outline-primary mx-2" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary mx-2" type="submit">Save Address</button>
                    </div>
                </form>
            </Modal.Body>
        </>
    );
}
