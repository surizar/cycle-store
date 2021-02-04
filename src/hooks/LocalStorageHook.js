import React, {useState} from 'react';

/*
apple:JSON.parse(localStorage.getItem('testObject'))
localStorage.setItem('testObject', JSON.stringify(testObject));
*/

export function useStorage (item) {

    const [cart, setState] = useState( JSON.parse(localStorage.getItem(item)) );

    function setLocal (newItem) {
        /*console.log(cart)
        console.log(typeof(cart))*/

        localStorage.setItem(item, JSON.stringify(newItem));
        setState(newItem);
    }

    return [cart, setLocal]
}