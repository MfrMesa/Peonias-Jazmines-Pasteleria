import Titulos from "./Titulos";
import RecetasFooter from "./RecetasFooter"
import BotonesEnlaces from "./BotonesEnlaces";
import classes from "/src/style/UltimasRecetas.module.css"
import recetas from "/src/recetasInfo.js"

export default function UltimasRecetas() {
    
    const ultimasRecetas = recetas.slice(0, 3);


    return (
                <section className={classes.recetasFooter}>
                    <Titulos miniTitle="ÚLTIMAS RECETAS"/>
                    <div className={classes.downRecetas}>
                    {ultimasRecetas.map((receta) => (
                    <RecetasFooter key={receta.id} to={`/receta/${receta.id}`} date={receta.fecha} texto={receta.nombreReceta} />
                        ))}
                    </div>
                    <BotonesEnlaces to="/galeriaRecetas" title="ver recetas"/>
                </section>
    )
}
