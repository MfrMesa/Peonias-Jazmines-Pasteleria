import React, { useState } from 'react'
import classes from "/src/style/MensajeCompra.module.css"
import Titulos from "/src/components/Titulos"


export default function MensajeCompra() {

    const [mensajeOpen, setMensajeOpen] = useState(true);



    function closeMensaje() {
        setMensajeOpen(false);
    }

    return (
        <>
        {mensajeOpen && ( 
        <div className={classes.contenedor}>
            <div className={classes.mensaje}>
                <button onClick={closeMensaje}>
                    <img src="/src/img/closeButton.svg" className={classes.closeButton} />
                </button>
                <Titulos title="¡Gracias por su compra!"/>
                <Titulos subTitulo="A su correo llegará el comprobante"/>
                <img src="/src/img/cake.svg" className={classes.cake}/>
            </div>
        </div>
        )}
        </>
    )
}
