import React from 'react'
import Comprobante from "/src/components/Comprobante"
import classes from "/src/style/PagoTransferencia.module.css"

export default function PagoTransferencia() {

    function handleClickTransferencia(){
        algo
    }


    return (
        <div className={classes.contenedor}>
        <div>
            <h4 className={classes.datos}>Datos bancarios:</h4>
            <p className={classes.text}>IBAN: 222 222 222 222 222 222 222</p>
            <p className={classes.text}>Nombre: María Fernanda Gómez</p>
            <p className={classes.text}>Banco: Banco BBVA</p>
        </div>
        <div className={classes.contenedorBoton}>
            <button onClick={handleClickTransferencia} className={classes.boton}>finalizar compra</button>
        </div>
        </div>
    )
}
