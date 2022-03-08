import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../UI/Title";
import"./Cart.css"
import CartList from "./CartList";
import CheckOutForm from "./CheckOutForm";
const Cart = () =>{
    return(
        <Fragment>
           <section>
        <div className="product-banner text-center">
          <Title className="mt-5">Shopping Cart</Title>
        </div>
      </section>
      <section className="shopping-cart-sec py-5">
      <Container>
        <div className="shopping-cart-cont">
        <Row className="justify-content-center"> 
          <Col md={6}>
        <CartList />
          </Col>
          <Col md={6}>
        <CheckOutForm />
          </Col>
        </Row>
        </div>
      </Container>
      </section>
        </Fragment>
    )
}   

export default Cart;