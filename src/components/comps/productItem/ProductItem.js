import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <img src={props.image} alt={props.headline} />
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <p className={classes.priceTag}>{props.price}</p>
      <Link to={"/product/" + props.prodid}>See product</Link>
    </div>
  );
};

export default ProductItem;
