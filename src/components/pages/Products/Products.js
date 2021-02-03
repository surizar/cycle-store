import React, {useState} from 'react';

import ProductList from '../../comps/productList/ProductList';

const Products = (props) => {

    const [productList,setProductList] = useState([
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
    ]);

    return(
        <>
        <h1>Our bikes</h1>
        <ProductList productList={productList} />        
        </>
    );
}

export default Products;