import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./SingleProduct.module.css";
import { useLocalStorage } from "../../hooks/LocalStorageHook";

const SingleProduct = (props) => {
  const [product, setProductState] = useState({});
  const productId = +props.match.params.productId;

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/surizar/cycle-store/models/" +
          productId
      )
      .then((response) => {
        let p = response.data;
        setProductState({ ...p });
      });
  }, []);

  let objectInfo = (
    <div className={classes.productInfo}>
      <h1>Product Not Found</h1>
    </div>
  );

  const [cartState, addToCart] = useLocalStorage("cart");

  if (Object.entries(product).length !== 0) {
    objectInfo = (
      <div className={classes.productInfo}>
        <h1>{product.headline}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
        <label htmlFor="quantity">How many? </label>
        <select name="quantity" id="sel-quantity">
          <optgroup label="Select quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>
            <option value="2">5</option>
          </optgroup>
        </select>
        <button onClick={() => addToCart({ productId: product.id })}>
          Add to cart
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>Product</h1>
      {objectInfo}
    </>
  );
};

export default SingleProduct;
