import { Link } from "react-router-dom"
import Titulos from "./Titulos"
import Divider from "./Divider"
import classes from "/src/style/RecetaIzquierda.module.css"

export default function RecetaIzquierda({to, date, recetaTitulo, parrafo}) {
    
    return (
                <div className={classes.contenedor}>
                    <Titulos recetaTitulo={recetaTitulo}/>
                    <Divider width={50}/>
                    <Link className={classes.link} to={to}>
                        <p className={classes.descripcion}>{parrafo}</p>
                    </Link>
                    <span className={classes.fecha}>{date}</span>
                </div>
)
} 
