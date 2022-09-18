import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { close } from '../../states/slices/modal_slice';

export default function SignUpCard() {

    const router = useRouter()
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(false)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Must be at least 6 characters").required('Required')
        }),
        onSubmit: async values => {
            setDisabled(true)
            // alert(JSON.stringify(values, null, 2));
            try {
                await axios.post("/auth/signup", values)
                if (router.asPath === '/signup') {
                    return router.push('/')
                }
                dispatch(close())
            } catch (error) {
                setDisabled(false)
                alert("Something went wrong")
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row g-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name='firstName'
                        id='firstName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <small className='text-danger'>{formik.errors.firstName}</small>
                    ) : null}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name='lastName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <small className='text-danger'>{formik.errors.lastName}</small>
                    ) : null}
                </div>
                <div className="col-12">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <small className='text-danger'>{formik.errors.email}</small>
                    ) : null}
                </div>
                <div className="col-12">

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <small className='text-danger'>{formik.errors.password}</small>
                    ) : null}
                </div>
                <div className="col-12 d-grid"> <button type="submit" className="btn btn-primary" disabled={disabled}>Register</button>
                </div>

                <p><small>By continuing, you agree to our <a href="#!"> Terms of Service</a> & <a href="#!">Privacy
                    Policy</a></small></p>
            </div>
        </form>
    )
}
