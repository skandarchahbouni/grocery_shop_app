import { useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import DeliveryAddress from "./delevery_address";
import DeliveryInstruction from "./delevery_instruction";
import DeliveryTime from "./delevery_time";
import Payament from "./payament";

export default function Payement_And_Delivery() {
  const [selectedAddress, setselectedAddress] = useState()
  const deliveryInstructionsRef = useRef()

  return (
    <Accordion className="col-lg-7 col-md-12" defaultActiveKey="0" flush>
      <DeliveryAddress setselectedAddress={setselectedAddress}/>
      <DeliveryTime />
      <DeliveryInstruction deliveryInstructionsRef={deliveryInstructionsRef}/>
      <Payament selectedAddress={selectedAddress} deliveryInstructionsRef={deliveryInstructionsRef}/>
    </Accordion>
  )
}
