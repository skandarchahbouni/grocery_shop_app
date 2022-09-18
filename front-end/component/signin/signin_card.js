import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { close } from '../../states/slices/modal_slice';

export default function SignInCard() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Must be at least 6 characters").required('Required')
        }),
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            setDisabled(true)
            try {
                await axios.post("/auth/signin", values)
                if (router.asPath === '/signin') {
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
                <div className="col-12">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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
                <div className="col-12 d-grid"> <button type="submit" className="btn btn-primary" disabled={disabled}>Log in</button>
                </div>

                <p><small>By continuing, you agree to our <a href="#!"> Terms of Service</a> & <a href="#!">Privacy
                    Policy</a></small></p>
            </div>
        </form>
    )
}
