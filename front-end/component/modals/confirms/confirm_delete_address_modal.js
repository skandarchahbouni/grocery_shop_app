import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { SIGNIN } from '../../../helpers/constant';
import { open } from '../../../states/slices/modal_slice';

export default function ConfirmDeleteAddressModal({ id_address, business_name, address_line_1, zip_code }) {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleDeleteAddress = async () => {
        try {
            await axios.delete(`/addresses/${id_address}`)
            setShow(false)
            router.reload()
        } catch (error) {
            if (error?.response?.status === 403) {
                setShow(false)
                return dispatch(open(SIGNIN))
            }
        }
    }

    const handleClose = () => setShow(false)
    return (
        <>
            <a href="#" className="btn btn-danger" onClick={() => setShow(true)}>Delete
            </a>
            <Modal show={show} centered={true}>
                <Modal.Header>
                    <h5 className="modal-title">Delete address</h5>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <h6>Are you sure you want to delete this address?</h6>
                    <p className="mb-6">{business_name}<br />

                    {address_line_1} <br/>

                        {zip_code} </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-gray-400" onClick={handleClose}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={handleDeleteAddress}>Delete</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
