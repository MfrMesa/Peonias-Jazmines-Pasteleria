import Titulos from "./Titulos";
import tituloclasses from "/src/style/Titulos.module.css"
import classes from "/src/style/Description.module.css"
import { useInView } from "react-intersection-observer";

export default function Description() {

    const { ref: titulo, inView: visible} = useInView()
    const { ref: text, inView: textVisible} = useInView()



    return (
            <section className={classes.descripcion}>
                <div ref={titulo} className={`${tituloclasses.tituloContainer} ${visible ? tituloclasses.animation : ""}` }>
                    <Titulos title="Bienvenidos a nuestro dulce emprendimiento"/>
                </div>
                <article className={classes.cafeInfo}>
                    <p ref={text} className={`${classes.parrafo} ${textVisible ? classes.animation : ""}` }>
                    A nuestra pastelería, donde los sueños se convierten en deliciosas obras maestras comestibles. En nuestro establecimiento, 
                    nos dedicamos a crear pasteles que van más allá de lo convencional, ofreciendo diseños personalizados que reflejan la individualidad y 
                    la creatividad de cada cliente. Desde cumpleaños y bodas hasta cualquier ocasión especial, nuestro equipo de talentosos pasteleros trabaja 
                    con esmero para convertir tus ideas en realidad, transformando cada pastel en una expresión única de tus gustos y preferencias. 
                    Ya sea que desees un diseño elegante y sofisticado o algo divertido y fuera de lo común, estamos aquí para cumplir tus deseos y endulzar 
                    tus momentos más memorables. Sumérgete en nuestro mundo de sabores y creatividad, donde cada bocado es una experiencia extraordinaria.
                    </p>
                </article>
            </section>
)
}
