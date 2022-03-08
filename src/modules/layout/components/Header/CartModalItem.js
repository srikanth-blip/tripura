import { useDispatch } from "react-redux";
import "./CartModalItem";
import crossImg from "../../../../assets/img/Remove.svg";
import { addItemToCartActions } from "../../../../store/add-cart-slice";
const CartModalItem = (props) =>{

    const dispatch = useDispatch();
 const {id, name, price, quantity, netQuantity, srcImg} = props.item;
 const productPrice = price;

 const minusChangeHandler = () => {
    dispatch(addItemToCartActions.removeItemFromCart(id));
  };

  const plusChangeHandler = () => {
    dispatch(addItemToCartActions.addItemToCart(
      {
      id,
      name,
      productPrice
      }
    ));
  };
  const removeItemHandler = () =>{
    dispatch(addItemToCartActions.removeItemQuickly(id));
  }
    return(
        <div className="shop-products-item" key={props.id}>
        <div className="shop-products-item-img position-relative">
          <img
            src={props.item.srcImg}
            alt=""
            className="img-fluid shop-product-img cart-item-img"
          />
        </div>
        <div className="shop-product-info position-relative">
          <img src={crossImg} alt="" className="img-fluid remove-btn" onClick={removeItemHandler}/>
          <div className="d-flex align-items-baseline">
            <h4 className="shop-product-name cart-item-title">
              {props.item.name} ({props.item.netQuantity})
            </h4>
          </div>
          <div className="shop-product-details">
            {/* <input type="number" defaultValue={item.quantity} onChange={quantityChangeHandler}/> */}
            <div className="quantity-input">
              <span className="quntity-name ">quntity</span>
              <div className="input-cont text-center">
                <div className="input-cont">
                  <span className="minus btn input1" onClick={minusChangeHandler}>
                    -
                  </span>
                  <span id="shop-item-qty" className="input-text qty text input2">
                    {props.item.quantity}
                  </span>
                  <span className="plus btn input3" onClick={plusChangeHandler}>
                    +
                  </span>
                </div>
              
              </div>
            </div>
            <p className="shop-product-price cart-price">₹{price}</p>
          </div>
        </div>
      </div>
    )
}
export default CartModalItem;