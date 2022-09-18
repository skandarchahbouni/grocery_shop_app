import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { close, open } from '../../states/slices/modal_slice';
import SignInCard from '../signin/signin_card';
import { SIGNUP } from '../../helpers/constant'

export default function SignInModal() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(close())
        dispatch(open(SIGNUP))
    }
    return (
        <>
            <Modal.Header closeButton>
                <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign In</h5>
            </Modal.Header>
            <Modal.Body>
                <SignInCard />
            </Modal.Body>
            <Modal.Footer>
                Don't have an account? <span className='text-primary' onClick={handleClick} style={{'cursor' : 'pointer'}}>Sign up</span>
            </Modal.Footer>
        </>
    );
}