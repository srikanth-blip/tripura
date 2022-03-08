import { useState } from "react";
import { useDispatch } from "react-redux";
import "./ListOfOurProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeProductsListAction } from "../../../../../store/home-products-list-slice";

const ListOfOurProducts = (props) => {
  const dispatch = useDispatch();
  const productsList = props.allProductsItems;

const [isListOfProductDetails, setisLIstOfProductDetails] = useState({
  id : productsList[0].id,
  name : productsList[0].name,
  srcImg : productsList[0].img,
  price : productsList[0].price,
  des : productsList[0].description,
  netQuantity : productsList[0].netQuantity
});


dispatch(homeProductsListAction.homeProductsListHandler(isListOfProductDetails));

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    
   
    const sliderItemsList  = productsList.map(items => (
        <div key={items.id}
        className="products-list-item position-relative"
        id="products-list-item"
      >
        <ul>
          <div className="owl-carousel">
            <div className="item">
              <li className="">
                <img
                 className="product-items"
                 id={items.id}
                  src={items.img}
                  alt=""
                  data-id={items.id}
                  data-name={items.name}
                  data-price={items.price}
                  data-des={items.description}
                  data-net-uantity={items.netQuantity}
                  onClick={() => (
                setisLIstOfProductDetails({
                  id : items.id,
                  name : items.name,
                  price : items.price,
                  srcImg : items.img,
                  des : items.description,
                  netQuantity : items.netQuantity
                })
                  )}
                />
              </li>
            </div>
          </div>
        </ul>
      </div>
    ))
   
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
          <Slider {...settings}>
          {sliderItemsList}
          </Slider>
     
      </div>
    </div>
  );
};
export default ListOfOurProducts;
