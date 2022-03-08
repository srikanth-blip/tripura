import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCartActions } from "../../../../../store/add-cart-slice";
import IncrementHandler from "../../../../UI/IncrementHandler";

import "./InfoOfOurProduct.css";
const InfoOfOurProducts = () => {
  const dispatch = useDispatch();
  const productsListDetails = useSelector(
    (state) => state.homeProductsList.homeProductDetails
  )

  const netQuantity = productsListDetails.netQuantity.split(",");

  const [netQuantityValue, setnetQuantityValue] = useState(netQuantity[0]);
  const { id, name, price, srcImg } = productsListDetails;
    const productPrice = parseInt(price);
 
  const netQuantityHandler = (e) => {
    setnetQuantityValue(e.target.value);

  };

  let quantity = 1 ;
  const quantityGetHandler = (countNumber) =>{
     quantity = countNumber;
  }

  const addItemTocartHandler = () => {
    dispatch(
      addItemToCartActions.addItemToCart({
        id,
        name,
        productPrice,
        srcImg,
        quantity,
        netQuantityValue,
      })
    );
  
  };
 
  
  return (
    <div className="product-details-cont pb-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-12  product-details-cont-col">
            <div className="product-preview-cont">
              <div className="product-preview-img active position-relative">
                <img
                  src={productsListDetails.srcImg}
                  alt=""
                  className="img-fluid"
                  id="shop-item-image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12  product-details-cont-col">
            <div className="preview-product-des-cont">
              <h2
                className="preview-product product-title "
                id="shop-item-title"
              >
                {name}
              </h2>
              <span className="preview-product-code " id="shop-item-code">
                Product code : {id}
              </span>
              <h2 className="preview-product-price prodcut-price">
                <span id="shop-item-price">₹{productPrice}</span>
              </h2>
              <div className="prouct-des-data-cont">
                <ul className="preview-product-des-text">
                  <li id="current-product-des">{productsListDetails.des}</li>
                </ul>
              </div>
              <div className="preview-product-quintity">
                <div className="net-quntity">
                  <span className="quntity-name">Net Quantity</span>
                  <select
                    name="net-quntity-num"
                    id="net-quntity-num"
                    onChange={netQuantityHandler}
                    defaultValue={netQuantity[0]}
                  >
                    {netQuantity.map((item) => (
                      <option id={item.index}  value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="quantity-input">
                  <span className="quntity-name ">Quantity</span>
                      <IncrementHandler  getCount={quantityGetHandler}/>
                </div>
              </div>
              <button
                href="#"
                className="preview-pro-add-cart-btn my-cart-btn shop-item-button"
                id="my-cart-btn"
                onClick={addItemTocartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoOfOurProducts;
