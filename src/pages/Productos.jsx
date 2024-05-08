import classes from "/src/style/Productos.module.css"
import CardRecetas from '../components/CardRecetas'
import Titulos from '../components/Titulos'
import tartas from "/src/tartas.js"
import { useContext } from "react";
import ContextCart from "/src/components/ContextCart"



export default function Productos() {

    const { addToCart } = useContext(ContextCart);


    return (
        <section className={classes.contenedorTienda}>
            <Titulos title="Dejate tentar con nuestras tartas"/>
            <div className={classes.contenedor}>
            {tartas.map((cake) =>{
                return <CardRecetas 
                id={cake.id} 
                nombreReceta={cake.nombreReceta}
                src={cake.src}
                precio={cake.precio} 
                descripcion={cake.descripcion}
                addToCart={addToCart}/>;
            })
            }
            </div>
        </section>
    )
}