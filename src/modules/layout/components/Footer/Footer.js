import Title from "../../../UI/Title";
import "./Footer.css";
import footerPlants from "../../../../assets/img/Footer Plants.svg";
import instaIcon from "../../../../assets/img/Instagram - Green.svg";
import fbIcon from "../../../../assets/img/Facebook.svg";
import wtsIcon from "../../../../assets/img/Whatsapp.svg";

const Footer =() =>{
    return(
        <footer style={{background: "#F9F6F4 0% 0% no-repeat padding-box"}}>
        <div className="footer-cont">
            <div className="container position-relative">
                <img src={footerPlants} alt="" className="footer-small-bg-img" />
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="footer-items">
                            <Title className="title">About Tripura Biotech</Title>
                        <p className="text">We are plant lovers with a mission to keep our planet healthy. Join us and spread the love.</p>
                        <ul className="footer-social-links p-0">
                            <li><a href="#"><img src={instaIcon} alt="" /></a></li>
                            <li><a href="#"><img src={fbIcon} alt="" /></a></li>
                            <li><a href="#"><img src={wtsIcon} alt="" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-items">
                        <Title className="title">Products</Title>
                    <ul className="footer-list-items p-0">
                        <li><a href="#">Food Ingredients</a></li>
                        <li><a href="#">Livestock Feed Supplements</a></li>
                        <li><a href="#">Agri Inputs</a></li>
                        <li><a href="#">Home/kitchen Gardening Products</a></li>
                         
                    </ul>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-items">
                        <Title className="title">Quick Links</Title>
                        <ul className="footer-list-items p-0">
                            <li><a href="#">Research Development</a></li>   
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Honors</a></li>
                            <li><a href="#">Careers</a></li>
                            
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="text">2021 Tripura Biotech, All Rights Reserved.</span>
                        </div>
                        <div className="col-md-4 text-center">
                            <span className="text">Made with <img src={instaIcon} alt="" style={{width : "16px"}} /> <b>Socialight</b></span>
                        </div>
                        <div className="col-md-4">
                            <span className="text">
                                <a href="#">Disclaimer</a> <a href="#">Privacy Policy </a><span className="mx-1">|</span>  <a href="#">Terms and Conditions</a><span className="mx-1">|</span>  <a href="#">Sitemap</a>
                            </span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
    </footer>
    )
}
export default Footer;