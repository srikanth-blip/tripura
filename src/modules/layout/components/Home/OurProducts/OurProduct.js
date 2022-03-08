import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Title from "../../../../UI/Title";
import ListOfOurProducts from "./ListOfOurProducts";
import productImg1 from "../../../../../assets/img/products/Flower food.png";
import productImg2 from "../../../../../assets/img/products/Leaf glow.png";
import InfoOfOurProducts from "./InfoOfOurProduct";
const DUMMY_PRODUCTS = [
    {
        id : "p1",
        name : "Organic Leaf Glow 1",
        img : productImg1,
        price : "450",
        description : "Organic Leaf Glow 1 is an innovative Organic Product, manufactured through bio-technological processes, to meet thenutritional requirements of plants.",
        netQuantity : "250ml,230ml,240ml"
    },
    {
        id : "p2",
        name : "Organic Leaf Glow 2",
        img :  productImg2,
        price : "450",
        description : "Organic Leaf Glow 2 is an innovative Organic Product, manufactured through bio-technological processes, to meet thenutritional requirements of plants.",
        netQuantity : "450ml,530ml,640ml"
    },
    {
        id : "p3",
        name : "Organic Leaf Glow 3",
        img :  productImg1,
        price : "450",
        description : "Organic Leaf Glow 3 is an innovative Organic Product, manufactured through bio-technological processes, to meet thenutritional requirements of plants.",
        netQuantity : "750ml,530ml,640ml"
    },
    {
        id : "p4",
        name : "Organic Leaf Glow 4",
        img :  productImg2,
        price : "450",
        description : "Organic Leaf Glow 4 is an innovative Organic Product, manufactured through bio-technological processes, to meet thenutritional requirements of plants.",
        netQuantity : "850ml,530ml,640ml"
    },
]
const OurProduct = () =>{
    return(
        <section className="our-produucts-sec pt-5">
            <Container>
            <Title>Our Products</Title>
            <ListOfOurProducts allProductsItems={DUMMY_PRODUCTS}/>
            </Container>
            <InfoOfOurProducts />
        </section>
    )
}
export default OurProduct;