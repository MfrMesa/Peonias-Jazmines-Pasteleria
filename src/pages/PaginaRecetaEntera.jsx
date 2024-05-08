import React, { useState } from "react";
import RecetaCheesecake from "../components/RecetaCheesecake";
import RecetaMuffin from "../components/RecetaMuffin";
import classes from "/src/style/Receta.module.css";
import { Link, useParams } from "react-router-dom";
import RecetaBanana from "../components/RecetaBanana";
import Titulos from "../components/Titulos";
import Divider from "../components/Divider";
export { recetas };



const recetas = [
    { id: 'cheesecake', componente: RecetaCheesecake },
    { id: 'banana', componente: RecetaBanana },
    { id: 'muffin', componente: RecetaMuffin }
];


export default function PaginaRecetaEntera() {


    const { id } = useParams();
    const indiceRecetaActual = recetas.findIndex(receta => receta.id === id);
    const RecetaComponente = recetas[indiceRecetaActual]?.componente;

    // receta anterior
    const recetaAnterior = recetas[indiceRecetaActual - 1];
    const urlAnterior = recetaAnterior ? `/receta/${recetaAnterior.id}` : null;

    // receta siguiente
    const recetaSiguiente = recetas[indiceRecetaActual + 1];
    const urlSiguiente = recetaSiguiente ? `/receta/${recetaSiguiente.id}` : null;


    return (
        <div className={classes.innerContenedor}>
            <Titulos title="Recetas que aseguran sonrisas"/>
            <Titulos subTitulo="cocina con amor para alimentar el alma"/>
            <Divider width={90}/>
            <section className={classes.linkContenedor}>
                <div className={classes.backLink}>
                    <img src="/src/img/chevron.svg" className={classes.chevron} />
                    <Link className={classes.back} to={urlAnterior}>Anterior</Link>
                </div>
                <div className={classes.nextLink}>
                        <Link className={classes.next} to={urlSiguiente}>Siguiente</Link>
                        <img src="/src/img/chevron.svg" className={classes.chevronrigth} />
                </div>
            </section>
            {RecetaComponente ? <RecetaComponente /> : <div>Error: Receta no encontrada</div>}
        </div>
    );
}
