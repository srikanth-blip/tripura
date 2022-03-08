import { Fragment } from "react";
import underLineImg  from "../../assets/img/Green Underline.svg";
import classes from  "./Title.module.css";
const Title = (props) =>{
return(
<Fragment>
<h2 className={`${classes.title} mb-5 ${props.className}`} > {props.children}<img src={underLineImg} alt="" />

</h2>
</Fragment>
)
}
export default Title;