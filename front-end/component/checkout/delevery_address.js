import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_ADDRESS, SIGNIN } from "../../helpers/constant";
import { open } from "../../states/slices/modal_slice";
import AddressCard from "../shared/address_card";
import Toggler from "./toggler";

export default function DeliveryAddress({ setselectedAddress }) {

    const dispatch = useDispatch()
    const handleAddDeliveryAddress = () => {
        dispatch(open(ADD_ADDRESS))
    }

    const [addresses, setAddresses] = useState([])
    useEffect(() => {
        const fetchUserAddresses = async () => {
            try {
                const { data } = await axios.get("/addresses")
                setAddresses(data)
            } catch (error) {
                if (error?.response?.status === 403) return dispatch(SIGNIN)
            }
        }
        fetchUserAddresses()
    }, [])

    return (
        <>
            <Toggler eventKey="0">
                <div className="d-flex justify-content-between align-items-center w-100 py-4">
                    <span className="fs-5 text-inherit collapsed h4">
                        <i className="feather-icon icon-map-pin me-2 text-muted"></i>Add delivery address
                    </span>
                    <a className="btn btn-outline-primary btn-sm" onClick={handleAddDeliveryAddress}>Add a new address </a>
                </div>
            </Toggler>

            <Accordion.Collapse eventKey="0">
                <div id="flush-collapseOne" className="accordion-collapse collapse show">
                    <div className="mt-5">
                        <div className="row">
                            {addresses.length > 0 && addresses.map(address=> 
                                <AddressCard 
                                    key={address.id_address}
                                    id_address={address.id_address}
                                    business_name={address.business_name}
                                    city={address.city}
                                    address_line_1={address.address_line_1}
                                    zip_code={address.zip_code}
                                    isDefault={address.is_default}
                                    setselectedAddress={setselectedAddress}
                                />
                            )}
                        </div>
                    </div>
                    <div className="btn btn-primary">next</div>
                </div>
            </Accordion.Collapse>
        </>
    )
}
