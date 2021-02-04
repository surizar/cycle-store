import classes from './ProductItem.module.css'


const ProductItem = (props) => {

    return (
        <div className={classes.productItem} >
            <img src={props.image} alt={props.headline} />
            <h3>{props.headline}</h3>
            <p>{props.description}</p>
            <p className={classes.priceTag}>{props.price}</p>
            <a href={"/product/"+props.prodid}>See product</a>
        </div>
    );
}

export default ProductItem;