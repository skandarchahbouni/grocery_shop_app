import axios from "axios"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { SIGNIN } from "../../helpers/constant"
import { open } from "../../states/slices/modal_slice"
import ConfirmDeleteAddressModal from "../modals/confirms/confirm_delete_address_modal"

export default function AddressCard({ id_address, business_name, city, address_line_1, zip_code, isDefault, setselectedAddress }) {
    const handleChanges = (e) => {
        console.log("called", e.target.value)
        setselectedAddress && setselectedAddress(e.target.value)
    }
    const router = useRouter()
    const dispatch = useDispatch()
    const handleSetAddressToDefault = async () => {
        try {
            await axios.put(`/addresses/${id_address}/set-default`)
            router.reload()
        } catch (error) {
            if (error?.response?.status) return dispatch(open(SIGNIN))
        }
    }
    return (
        <div className="col-lg-6 col-12 mb-4">
            <div className="border p-6 rounded-3">
                <div className="form-check mb-4">
                    
                    <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleChanges}  defaultChecked={isDefault} value={id_address}/>
                    <label className="form-check-label text-dark" htmlFor="homeRadio">
                        {business_name}
                    </label>
                </div>
                <address> <strong>{city}</strong> <br />
                    {address_line_1}<br />
                    <abbr title="Phone">{zip_code}</abbr></address>
                {isDefault ? <span className="text-danger">Default address </span> :

                    <a href="#" className="link-primary" onClick={handleSetAddressToDefault}>Set as Default</a>
                }

                <div className="mt-4">
                    {/* <a href="#" className="text-inherit">Edit </a> */}
                    <ConfirmDeleteAddressModal 
                        id_address={id_address}
                        address_line_1={address_line_1}
                        business_name={business_name}
                        zip_code={zip_code}
                    />
                </div>
            </div>
        </div>
    )
}
