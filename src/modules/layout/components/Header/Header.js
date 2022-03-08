import React, { Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Badge,
  Modal,
  Button,
} from "react-bootstrap";
import classes from "./Header.module.css";
// img src
import logo from "../../../../assets/img/Tripura Logo.svg";
import callIcon from "../../../../assets/img/Call.svg";
import emailIcon from "../../../../assets/img/E-mail.svg";
import instaIcon from "../../../../assets/img/Instagram.svg";
import cartSvg from "../../../../assets/img/Cart.svg";
import checkOutSvg from "../../../../assets/img/Checkout.svg";
import ModalComp from "../../../UI/Modal";
import CartModal from "./CartModal";
import { cartAction } from "../../../../store/cart-slice";
import { addItemToCartActions } from "../../../../store/add-cart-slice";

const Header = (props) => {

  const dispatch = useDispatch();
  const showModal = useSelector(state => state.cartModal.cartModalIsvisible);
  const totalQuantity = useSelector((state) => state.addItemToCart.totalQuantity)
 
  const modalShowHandler = () =>{
    dispatch(cartAction.cartShowHandler());
  }



  return (
    <Fragment>
      <header>
        <div className={classes["header-main-cont"]}>
          <Navbar bg="light" expand="lg" className={classes["navbar__"]}>
            <Container className="flex-column align-items-start">
              <div className={classes["top-bar"]}>
                <div className={classes["contact-info"]}>
                  <ul>
                    <li>
                      <img src={callIcon} alt="" />
                      <a href="tel:(+91) 9876 543 210">(+91) 9876 543 210</a>
                    </li>
                    <li>
                      <img src={emailIcon} alt="" />
                      <a href="mailto:email@tripurabiotech.com">
                        email@tripurabiotech.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={classes["top-bar-social"]}>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={instaIcon} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instaIcon} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instaIcon} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.navbar__top_cont}>
                <Navbar.Brand href="#home" className={classes["navbar__brand"]}>
                  <img
                    src={logo}
                    alt="logo"
                    className={`${classes["logo-img"]} img-fluid`}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className={classes.navbar__nav}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">How to use Products</Nav.Link>
                    <Nav.Link href="#link" className="position-relative">
                      <img
                        src={cartSvg}
                        alt=""
                        className={`${classes["cart-icon"]} ${classes["my-cart-icon"]}`}
                        id="cart-cont-btn"
                        onClick={modalShowHandler}
                      />
                      <Badge bg="success">{totalQuantity}</Badge>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <img
                        src={checkOutSvg}
                        alt=""
                        className={`${classes["cart-icon"]} ${classes["my-cart-icon"]}`}
                        id="cart-cont-btn"
                        data-toggle="modal"
                        data-target="#myModal"
                      />
                    </Nav.Link>

                    {/* <Nav.Link href="#link" className="">
                    <b>Log in</b>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <b>Sign in</b>
                  </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
        </div>
      </header>
      {showModal &&  <ModalComp>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CartModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={modalShowHandler}>Close</Button>
          <Button variant="danger">Check Out</Button>
        </Modal.Footer>
      </ModalComp>
      }
  
      
    </Fragment>
  );
};
export default Header;
