import React, { useEffect, useState } from 'react';
import classes from './SingleProduct.module.css';
//import { useStorage } from '../../hooks/LocalStorageHook';

const SingleProduct = (props) => {

    const [product, setProductState] = useState ({});
    const productId = +props.match.params.productId;

    const productList = [
        {
            id:0,
            image:"https://m.media-amazon.com/images/I/61vTMLNYNEL._AC_UY218_.jpg",
            headline:"Folding Bike",
            description:"This is the folding bike",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        },
        {
            id:1,
            image:"https://m.media-amazon.com/images/I/713-Rfn9leL._AC_UY218_.jpg",
            headline:"Mountain Bike",
            description:"This is the MTB",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        },
        {
            id:2,
            image:"https://m.media-amazon.com/images/I/71E0T2-BoYL._AC_UY218_.jpg",
            headline:"Super mountain bike",
            description:"This is the super MTB",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        },
        {
            id:3,
            image:"https://m.media-amazon.com/images/I/71JvhciY+gL._AC_UY218_.jpg",
            headline:"Urban bike",
            description:"This is the urban bike",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        },
        {
            id:4,
            image:"https://m.media-amazon.com/images/I/71l1PZLD6yL._AC_UY218_.jpg",
            headline:"Other bike",
            description:"This is the other bike",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        },
        {
            id:5,
            image:"https://m.media-amazon.com/images/I/81AnExLhyJL._AC_UY218_.jpg",
            headline:"Special bike",
            description:"This is the special bike",
            price: "100",
            size: "M",
            color: "Red",
            weight: "15kg",
            brand: "Zizzo"
        }        
    ];

    useEffect( () => {
        const p  = (productList.filter( p=>p.id===productId))[0] || {};
        setProductState({...p});
    }, []);

    let objectInfo = <div className={classes.productInfo}><h1>Product Not Found</h1></div>;

    //const [cart, addToCart] = useStorage('cart');
/**
 * localStorage.setItem("names", JSON.stringify(names));
 * var storedNames = JSON.parse(localStorage.getItem("names"));
 */


    const addToCart = (cartItem) => {
        let currentCart=JSON.parse(localStorage.getItem("cart"))||[];
        currentCart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }


    if ( Object.entries(product).length !== 0 ){
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
                <button onClick={() => addToCart({product:product.headline})}>Add to cart</button>
            </div>
        )
    }

    return (
        <>
        <h1>Single Product</h1>
        {objectInfo}
        </>
    )
}

export default SingleProduct;