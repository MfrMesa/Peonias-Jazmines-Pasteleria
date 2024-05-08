import React, { useContext, useState } from 'react';
import classes from "/src/style/ItemCart.module.css";
import ContextCart from './ContextCart';

export default function ItemCart({ item}) {

    const { removeFromCart } = useContext(ContextCart);
    const [totalUnits, setTotalUnits] = useState(item.quantity || 1);

    function handlerCounterIncrementar() {
        setTotalUnits(totalUnits + 1);
    }

    function handlerCounterRestar() {
        if (totalUnits > 1) {
            setTotalUnits(totalUnits - 1);
        }
    }

    let totalPrice = item.precio * totalUnits;

    return (
        <div className={classes.item}>
        <h1>{item.idP}</h1>
            <img src={item.src} alt="Producto seleccionado" className={classes.foto} />
            <h4 className={classes.name}>Tarta: {item.nombreReceta}</h4>
            <h4 className={classes.size}>Medidas: 25 raciones/24cm</h4>
            <button onClick={() => removeFromCart(item.id)} className={classes.removeButton}>
                <img src="/src/img/trashcan.svg"/>
            </button>
            <div className={classes.cantidades}>
                <button type="button" onClick={handlerCounterRestar} className={classes.close}>
                    <img src="/src/img/signoMenos.svg" alt="Restar" />
                </button>
                <span className={classes.textos}>{totalUnits} unidades</span>
                <button type="button" onClick={handlerCounterIncrementar} className={classes.close}>
                    <img src="/src/img/signoMas.svg" alt="Sumar" />
                </button>
            </div>
            <span className={classes.precio}>{totalPrice} €</span>
        </div>
    );
}
