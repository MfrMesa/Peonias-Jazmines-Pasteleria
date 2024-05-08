import React from 'react'
import classes from "/src/style/FotoDescripcion.module.css"

export default function FotoDescripcion() {


    return (
        <div className={classes.contenedorDescripcion}>
            <h3 className={classes.tartaDescripcion}>Tarta de Boda</h3>         
            <p className={classes.parrafoTitulo}>Descripcion:</p>
            <p className={classes.descripcion}>bizcocho de chocolate, rellena de buttercream de chocolate y cubierta con buttercream de vainilla.</p>
            <p className={classes.descripcion}>rinde para: 40 porciones.</p>
        </div>
    )
}
