import { useState } from "react";

import "./IncrementHandler.css";

const IncrementHandler =  (props) =>{
const [quantityCount, setQuantityCount] = useState(1);

const minusChangeHandler = () => {
    setQuantityCount(quantityCount - 1);
    if (quantityCount < 2) {
      setQuantityCount(1);
    }
  };

const plusChangeHandler = () => {
    setQuantityCount(quantityCount + 1);
  };
 props.getCount(quantityCount);
return(
    <div className="input-cont">
      <span
        className="minus btn input1"
        onClick={minusChangeHandler}
      >
        -
      </span>
      <span
        id="shop-item-qty"
        className="input-text qty text input2"
      >
        {quantityCount}
      </span>
      <span
        className="plus btn input3"
        onClick={plusChangeHandler}
      >
        +
      </span>
    </div>
)
}

export default IncrementHandler;