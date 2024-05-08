import React, {  useContext, useState } from 'react';
import Titulos from '../components/Titulos';
import ItemCart from '../components/ItemCart';
import classes from "/src/style/ShoppingCart.module.css";
import BotonesEnlaces from '../components/BotonesEnlaces';
import style from "/src/style/Button.module.css"
import FormularioTienda from '../components/FormularioTienda';
import ContextCart from '../components/ContextCart';



export default function ShoppingCart() {

    const [verResumen, setVerResumen] = useState(false);
    const { cart, totalPrice, totalUnits } = useContext(ContextCart);


    function handleVerResumen(){
        setVerResumen(true)
    }


    return (
        <>
        <section className={classes.contenedorCarrito}>
                <div className={classes.title}>
                    <Titulos subTitulo="Gracias por confiar en nosotros para acompañarte en los momentos más especiales"/>
                </div>
            <section className={classes.carritoContainer}>
                <div className={classes.titulosDescriptivos}>
                    <h3 className={classes.titulos}>Productos</h3>
                    <div className={classes.titulosInner}>
                    <h3 className={classes.titulos}>Cantidad</h3>
                    <h3 className={classes.titulos}>Precio</h3>
                    </div>
                </div>
                {cart.map(item => (
                    <ItemCart key={item.id} item={item} />
                ))}
                <div className={classes.totalContainer}>
                    <h3 className={classes.titulos}>Total: </h3>
                    <h3 className={classes.titulos}>{totalUnits}</h3>
                    <h3 className={classes.titulos}>{totalPrice} €</h3>
                </div>
                <div className={classes.botonesContainer}>
                    <BotonesEnlaces title="seguir comprando" to="/productos" />
                <button className={style.button} onClick={handleVerResumen}>finalizar compra</button>
                </div>
            </section>
        </section>
        {(verResumen && <FormularioTienda/>)}
        </>
    );
    }
