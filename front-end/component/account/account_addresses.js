import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_ADDRESS } from "../../helpers/constant";
import { open } from "../../states/slices/modal_slice";
import AddressCard from "../shared/address_card";

export default function AccountAddresses({ addresses }) {
    const dispatch = useDispatch()
    const hanldleAddNewAddress = async ()=>{
        return dispatch(open(ADD_ADDRESS))
    }
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <div className="d-flex justify-content-between mb-6">
                    <h2 className="mb-0">Address</h2>
                 <a href="#" className="btn btn-outline-primary" onClick={hanldleAddNewAddress}>Add a
                        new address </a> 
                </div>
                <div className="row">
                    {addresses.length > 0 && addresses.map(address =>
                        <AddressCard
                            key={address.id_address}
                            id_address={address.id_address}
                            business_name={address.business_name}
                            city={address.city}
                            address_line_1={address.address_line_1}
                            zip_code={address.zip_code}
                            isDefault={address.is_default}
                            setselectedAddress={null}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
