import RecetaDerecha from "./RecetaDerecha";
import classes from "/src/style/RecetasDestacadas.module.css" 
import RecetaIzquierda from "./RecetaIzquierda";
import Titulos from "./Titulos";
import { useInView } from "react-intersection-observer";


export default function RecetasDestacadas() {

    const { ref: left, inView: visibleLeft} = useInView()
    const { ref: right, inView: visibleRight} = useInView()

    return (
            <section className={classes.recetasContainer}>
                <Titulos title="RECETAS DE LA SEMANA"/>
                <div ref={left} className={`${classes.recetasHome} ${visibleLeft ? classes.animationleft : ""}` }>
                    <img className={classes.foto} src="/src/img/naranja.png" alt="foto de receta"/>
                    <RecetaDerecha recetaTitulo="Tarta de naranja" to="recetas/tartanaranja" date="03/12/23" parrafo="La receta original incorpora Naranjas tipo “Valencia” de piel fina, ya que las naranjas en este pastel se añaden con piel, 
                                eso si, después de blanquearlas para retirar el amargor que la parte blanca pudiera incorporar. Yo al incorporar las naranjas sanguinas 
                                que tienen una piel algo mas fina, no he tenido ningún problema.
                                En wordencuentras el paso a paso, para hacerlas ya en casa."/>
                </div>
                <div ref={right} className={`${classes.recetasHome} ${visibleRight ? classes.animationright : ""}` }>
                    <RecetaIzquierda recetaTitulo="Crumble de manzana" to="recetas/crumble" date="24/11/23" parrafo="Además de ser un postre económico, es un postre fácil que cualquiera puede hacer. Y obvio que es delicioso, no sé por qué lo dudaban. Está implícito en todos los postres eso! El crumbre no es difícil de hacer, pero tenemos que respetar ciertas cosas. Es importante que usemos la manteca bien fría para lograr ese efecto crocante, por eso no hay que saltearse ningún paso. Es un postre ideal para hacer durante una maratón en Netflix, entre capítulo y capítulo van preparando y metiendo en la heladera. "/>
                    <img className={classes.foto} src="/src/img/apple.png" alt="foto de receta"/>
                </div>
            </section> 
    )
}
