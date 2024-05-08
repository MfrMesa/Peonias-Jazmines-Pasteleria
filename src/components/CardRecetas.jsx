import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Divider from "/src/components/Divider"
import classes from "/src/style/CardRecetas.module.css"
import { useInView } from "react-intersection-observer";


export default function CardRecetas({nombreReceta, descripcion, src, boton, width, precio, addToCart, id}) {

      
  const { ref: foto, inView: visible} = useInView()

  const location = useLocation();

  const isProductosRoute = location.pathname === "/productos";


    return (
      <div className={classes.contenedor} id={id} style={{width: width + "%"}}>
        <img src={src} ref={foto} className={`${classes.imagen} ${visible ? classes.animation : ""}`}/>
        <h4 className={classes.nombre}>{nombreReceta}</h4>
        <Divider width={90}/>
        <p className={classes.texto}>{descripcion}</p>
        <span>precio {precio} € </span>
        <Link to={`/receta/${id}`} className={classes.link}>{boton}</Link>
        {isProductosRoute && 
          <button onClick={() => addToCart({ id, nombreReceta, src, precio })} className={classes.boton}>
          añadir al carrito
          </button>
        }
      </div>
    )
}
