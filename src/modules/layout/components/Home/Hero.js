import classes from "./Hero.module.css";
import Slider from "react-slick";
import ButtonComp from "../../../UI/ButtonComp";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const SliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const sliderInfoArray = [
      { 
          id :"s1",
          title : "Best in Class  Home Gardening Products",
          info :` " Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s"`,
          btn : "Shop now"
      },
      { 
        id :"s2",
        title : "Best in Class   Home Gardening Products",
        info :` " Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s"`,
        btn : "Shop now2"
    },
    { 
        id :"s3",
        title : "Best in Class  Home Gardening Products",
        info :` " Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s"`,
        btn : "Shop now3"
    }
  ];

  const sliderItems = sliderInfoArray.map((item) =>(
    <div className={classes.slider} key={item.id}>
    <Container>
    <div className={classes["hero-text-info-cont"]}  >
    <h1 className={classes["hero-title"]}>{item.title}</h1>
    <p className={classes["hero-sub-info-text"]}>
     {item.info}
    </p>
    <ButtonComp variant="outline-primary" className="">{item.btn}</ButtonComp>
  </div>
  </Container>
  </div>
  ));

  return (
    <div className={classes.hero__top_cont}>
      <Slider {...SliderSettings} className="hero-slider">
        
          {sliderItems}
      
      </Slider>
    </div>
  );
};
export default Hero;
