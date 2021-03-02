import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../../comps/productList/ProductList";

const Products = (props) => {
  const [productState, setProductState] = useState({
    productList: [],
  });

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/surizar/cycle-store/models")
      .then((response) => {
        let bikeList = response.data;
        bikeList = bikeList.map((bike) => ({
          id: bike.id,
          headline: bike.headline,
          description: bike.description,
          price: bike.price,
          image: bike.image,
          brandid: bike.brandId,
        }));
        setProductState({ productList: [...bikeList] });
      });
  }, []);

  return (
    <>
      <h1>Our bikes</h1>
      <ProductList products={productState.productList} />
    </>
  );
};

export default Products;
