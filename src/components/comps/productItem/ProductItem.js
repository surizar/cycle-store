
const ProductItem = (props) => {

    return (
        <div>
            <img src={props.image} alt={props.headline} />
            <h3>{props.headline}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default ProductItem;