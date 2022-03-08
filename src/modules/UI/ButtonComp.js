import { Fragment } from "react";
import { Button } from "react-bootstrap";
import classes from  "./ButtonComp.module.css";

const ButtonComp = (props) => {
  return (
    <Fragment>
      <Button variant={props.variant}  type={props.type || "button"} className={`${classes.button} ${props.className}`}>
        {props.children}
      </Button>
    </Fragment>
  );
};
export default ButtonComp;
