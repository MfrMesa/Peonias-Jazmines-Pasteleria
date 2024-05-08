import React, { createContext, useEffect, useState } from 'react';


const ContextCart = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const [totalUnits, setTotalUnits] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let units = 0;
        let price = 0;

        cart.forEach(item => {
            units += item.quantity;
            price += item.precio * item.quantity;
        });

        setTotalUnits(units);
        setTotalPrice(price);
    }, [cart]);




    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };


    
    return (
        <ContextCart.Provider value={{ cart, addToCart, removeFromCart, totalUnits, totalPrice }}>
            {children}
        </ContextCart.Provider>
    );
};

export default ContextCart;


