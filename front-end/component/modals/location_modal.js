import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { close } from '../../states/slices/modal_slice';

export default function LocationModal() {
    const dispatch = useDispatch()
    return (
        <>
            <Modal.Body>
                <div className="d-flex justify-content-between align-items-start ">
                    <div>
                        <h5 className="mb-1" id="locationModalLabel">Choose your Delivery Location</h5>
                        <p className="mb-0 small">Enter your address and we will specify the offer you area. </p>
                    </div>
                    <button type="button" className="btn-close" onClick={()=> dispatch(close())}></button>
                </div>
                <div className="my-5">
                    <input type="search" className="form-control" placeholder="Search your area" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">Select Location</h6>
                    <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">Clear All</a>


                </div>
                <div>
                    <div className='overflow-auto' style={{ "height": "300px" }}>
                        <div className="list-group list-group-flush">

                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active">
                                <span>Alabama</span><span>Min:$20</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Alaska</span><span>Min:$30</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Arizona</span><span>Min:$50</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>California</span><span>Min:$29</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Colorado</span><span>Min:$80</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Florida</span><span>Min:$90</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Arizona</span><span>Min:$50</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>California</span><span>Min:$29</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Colorado</span><span>Min:$80</span></a>
                            <a href="#"
                                className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action">
                                <span>Florida</span><span>Min:$90</span></a>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}
