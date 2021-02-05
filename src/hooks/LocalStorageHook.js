import React, {useState} from 'react';

export function useLocalStorage (item) {

    const [cart, setState] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

    function setLocal (newItem) {
        let newCart = cart;
        newCart.push (newItem);
        localStorage.setItem(item, JSON.stringify(newCart));
        setState(newCart);
    }

    return [cart, setLocal]
}