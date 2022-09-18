import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { close } from '../../states/slices/modal_slice';
import LocationModal from './location_modal';
import SignInModal from './signin_modal';
import SignUpModal from './signup_model';
import { SIGNUP, SIGNIN, LOCATION, ADD_ADDRESS } from "../../helpers/constant"
import AddAddressModal from './add_address_modal';


export default function PopUp() {

    const show = useSelector((state) => state.modal.show)
    const card = useSelector((state) => state.modal.card)

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(close())
    }

    let component
    let size 
    switch (card) {
        case SIGNUP:
            component = <SignUpModal />
            break;
        case SIGNIN:
            component = <SignInModal />
            break;
        case LOCATION:
            component = <LocationModal />
            break;
        case ADD_ADDRESS:
            component = <AddAddressModal />
            break;
        default:
            component = null
            break;
    }

    return (
        <>
            <Modal centered={true} size={size} show={show} onHide={handleClose}>
                {component}
            </Modal>
        </>
    );
}
