import React, { useContext, useState } from 'react'
import classes from "/src/style/ProductoInfo.module.css"
import PagoTransferencia from "/src/components/PagoTransferencia"
import ContextCart from './ContextCart';




export default function ProductoInfo({handleCheckChange}) {

    
    const [transferencia, settransferencia] = useState(false);
    const { totalPrice, totalUnits } = useContext(ContextCart)



    function handleMetodoPago(event) {
        const checkbox = event.target.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; 
        const isChecked = checkbox.checked;
        const metodoPago = checkbox.name;
        handleCheckChange(metodoPago, isChecked);
    }
    

    function handletransferencia(){
        settransferencia(!transferencia)
    }


    return (
        <form className={classes.carrito}>
            <h4 className={classes.resumen}>resumen pedido:</h4>
            <div className={classes.pedidoDetalles}>
                <div className={classes.detalles}>
                    <p className={classes.text}>Tarta</p>
                    <span className={classes.text}>{totalUnits} unidad</span>
                </div>
                <div className={classes.detalles}>
                    <p className={classes.text}>monto a pagar:</p>
                    <span className={classes.text}>{totalPrice} €</span>
                </div>
            </div>
                <h4 className={classes.resumen}>método de pago:</h4>
                <div className={classes.pago}>
                    <div>
                        <input type="checkbox" name="tarjeta" className={classes.inputs}/>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1P9aV0P9Hiv9LUuEsQ7N740r"
                            publishable-key="pk_test_51P9ZpKP9Hiv9LUuENBi9kxvUPQvHf4rTtPAubVUyqimIGsGy13Z8yje0RUwwu0iVZj3dwspcsyAyus0S1DaBUV7D00ZoqMW1Ft">
                        </stripe-buy-button>
                    </div>
                    <div>
                        <button type="button" className={classes.labels} onClick={handleMetodoPago}>contrareembolso
                            <input type="checkbox" name="efectivo" className={classes.inputs}/>
                        </button>
                    </div>
                    <div onClick={handletransferencia}>
                        <button type="button" className={classes.labels} onClick={handleMetodoPago}>transferencia bancaría
                            <input type="checkbox" name="transferencia" className={classes.inputs}/>
                        </button>
                    </div>
                    {(transferencia && 
                        <PagoTransferencia/>
                    )}
                </div>
        </form>
    )
}






