import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import SignUpCard from '../signup/signup_card';
import { close, open } from '../../states/slices/modal_slice';
import { SIGNIN } from '../../helpers/constant'


export default function SignUpModal() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(close())
        dispatch(open(SIGNIN))
    }
    return (
        <>
            <Modal.Header closeButton>
                <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>
            </Modal.Header>
            <Modal.Body>
                <SignUpCard />
            </Modal.Body>
            <Modal.Footer>
                Already have an account? <span className='text-primary' style={{'cursor': 'pointer'}} onClick={handleClick}>Sign in</span>

            </Modal.Footer>
        </>
    );
}