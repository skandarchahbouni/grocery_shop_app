import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../../states/slices/wishlist_slice';


export default function ConfirmRemoveFromWishList({ code_product }) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const dispatch = useDispatch()
    const router = useRouter()

    const handleRemoveFromWishlist = async () => {
        try {
            await axios.delete(`/wishlist/${code_product}/remove-product`)
            dispatch(removeFromWishlist(code_product))
            setShow(false)
        } catch (error) {
          if (error?.response?.status === 403){
            router.replace('/signin')
          }   
        }
    }

    return (
        <>
            <i className="feather-icon icon-trash-2" onClick={handleOpen}></i>
            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header>
                    <h5 className="modal-title">Remove product from wishlist</h5>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <h6>Are you sure you want to remove this product from  your wishlist?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-gray-400" onClick={handleClose}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={handleRemoveFromWishlist}>Remove</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
