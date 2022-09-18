import LocationModal from "../component/modals/location_modal";
import ProductModal from "../component/modals/product_modal";
import SignInModal from "../component/modals/signin_modal";
import SignUpModal from "../component/modals/signup_model";

export default function Modals() {
  return (
   <>
    <SignUpModal />
    <SignInModal />
    <LocationModal />
    <ProductModal />
   </>
  )
}
