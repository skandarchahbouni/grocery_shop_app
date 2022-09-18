import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function Toggler({ children, eventKey, callback }) {
    const handle_toggle = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <div onClick={handle_toggle}>
            {children}
        </div>
    );
}