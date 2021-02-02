import ProductItem from "../productItem/ProductItem";

const productList = (props) => {

    let product_list = props.productList.map(
        (product, index) => {
            return ( <ProductItem 
                    prodid={product.id}
                    image={product.image}
                    headline={product.headline}
                    description={product.description}
                    price={product.price}
                    size={product.size}
                    color={product.color}
                    weight={product.weight}
                    brand={product.brand} 
                    />
            );
        }
    );

    return (
        <div>
            {product_list}
        </div>
    );
}

export default productList;