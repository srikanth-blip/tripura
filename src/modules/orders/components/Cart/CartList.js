import { Fragment, useState } from "react";
import "./CartList.css";
import cartItemImg from "../../../../assets/img/shop-product.png";
import removeIcon from "../../../../assets/img/Remove.svg";
const DUMMY_PRODUCTS = [
  {
    id: "c1",
    name: "Organic Leaf Glow 1",
    img: cartItemImg,
    price: "₹450",
    netQuantity: "1",
  },
  {
    id: "c2",
    name: "Organic Leaf Glow 2",
    img: cartItemImg,
    price: "₹450",
    netQuantity: "2",
  },
];


const CartList = () => {

    const cartItemList = DUMMY_PRODUCTS.map((item) => (
        <div className="shop-products-item shop-cart-container" key={item.id}>
          <div className="shop-products-item-img position-relative">
            <img
              src={item.img}
              alt=""
              className="img-fluid shop-product-img cart-item-img"
            />
            <img src={removeIcon} alt="" className="img-fluid remove-btn" />
          </div>
      
          <div className="shop-product-info">
            <div className="d-flex align-items-baseline">
              <h4 className="shop-product-name cart-item-title">{item.name}</h4>
            </div>
            <div className="shop-product-details">
              <div className="quantity-input">
                <span className="quntity-name ">Quantity</span>
                <div className="input-cont">
                    <div className="d-flex align-items-center justify-content-between">
                        <div style={{cursor : "pointer"}}>-</div>
                        <div>{item.netQuantity}</div>
                        <div style={{cursor : "pointer"}}>+</div>
                    </div>
                  {/* <input
                    type="number"
                    value={enteredValue}
                    onChange={netQuantityChangeHandler}
                    className="input-text qty text input2 cart-quantity-input"
                    min="1"
                    size="2"
                  /> */}
                </div>
              </div>
              <p className="shop-product-price cart-price">{item.price}</p>
            </div>
          </div>
        </div>
      ));
  return (
    <Fragment>
      <div className="shop-products-list cart-items">
        <div className="shop-products-item-cont cart-row">{cartItemList}</div>
      </div>

      {/*product prices calculation*/}

      <div className="product-cal mt-5">
        <div className="d-flex justify-content-between">
          <p>Sub-Total</p>
          <p className="sub-total cart-total-price">₹968</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Taxes</p>
          <p className="taxes" id="taxPrice">
            ₹90
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between shop-product-total">
          <h3 className="font-weight-bold">Total</h3>
          <h3
            className="total-price "
            style={{color: "#76BF4E"}}
            id="cart-total-price2"
          >
            ₹1058
          </h3>
        </div>
      </div>
    </Fragment>
  );
};
export default CartList;
