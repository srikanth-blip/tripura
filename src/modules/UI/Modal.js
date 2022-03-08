import { useState } from "react"
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const ModalComp = (props) =>{
   const [show, setShow] = useState(true);
    const dispatch = useDispatch();

    const modalHideHandler = () =>{
        setShow(false); 
        // props.modalReset(false)
        dispatch(cartAction.cartShowHandler())
    }
   
    return (
      <Modal
        size="lg"
        show={show}
        onHide={modalHideHandler}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {props.children}
      </Modal>
    );
}
export default ModalComp;