import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartModal.css";
import cartItemImg from "../../../../assets/img/products/Leaf-Glow.png";
import CartModalItem from "./CartModalItem";

const CartModal = () => {

  // const [taxPrice, setTaxPrice] = useState(90);
   const [grandTotal, setGrandTotal] = useState(0);
  const cartItems = useSelector((state) => state.addItemToCart.items);
  const cartTotalPrice = useSelector((state) => state.addItemToCart.totalPrice);

  useEffect(() => {
    setGrandTotal(cartTotalPrice + 90);
    return () => {
      console.log("finish up");
    }
  }, [cartTotalPrice])
  
  return (
    <Fragment>
      <div className="shop-products-list cart-items">
        <div className="cart-row shop-products-item-cont">
          {
            cartItems.map((item) =>(
<CartModalItem
          key={item.id}
          item={{
            id : item.id,
            name : item.name,
            srcImg : item.srcImg,
            price : item.price,
            quantity : item.quantity,
            netQuantity : item.netQuantity,
          }}
          />
            ))
          }
          
          </div>
      </div>
      {/* cart Calculations */}
      {cartItems.length < 1 && (
        <div className="text-center">
          <button className="btn btn-success text-center d-inline-block">
            Add Items
          </button>
        </div>
      )}

      {!cartItems.length < 1 && (
        <Fragment>
          <hr />
          <div className="product-cal mt-2">
            <div className="d-flex justify-content-between">
              <p>Sub-Total</p>
              <p className="sub-total cart-total-price">
              ₹{cartTotalPrice}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Taxes</p>
              <p className="taxPrice" id="taxPrice">
                ₹90
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-between shop-product-total">
              <h3 className="font-weight-bold">Total</h3>
              <h3
                className="total-price cart-total-price2"
                id="cart-total-price2"
                style={{ color: "#76BF4E" }}
              >
                ₹{grandTotal}
              </h3>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default CartModal;
