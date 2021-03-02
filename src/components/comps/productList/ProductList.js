import ProductItem from "../productItem/ProductItem";

const productList = (props) => {
  let product_list = props.products.map((product, index) => {
    return (
      <ProductItem
        key={product.id}
        prodid={product.id}
        image={product.image}
        headline={product.headline}
        description={product.description}
        price={product.price}
        brand={product.brandid}
      />
    );
  });

  return <div>{product_list}</div>;
};

export default productList;
