import Titulos from './Titulos'
import Divider from './Divider'
import MiniGaleriaFotos from './MiniGaleriaFotos'
import classes from "/src/style/DiseñosPopulares.module.css"
import { useInView } from "react-intersection-observer";



export default function DiseñosPopulares() {

    
    const { ref: titulo, inView: visible} = useInView()

    return (
        <section id="galeria" className={classes.miniGaleriaContainer}>
                <Divider width={90}/>
                <div ref={titulo} className={`${classes.miniGaleriaTitulosContainer} ${visible ? classes.animation : ""}` }>
                    <Titulos title="Encargos" subTitulo="Nuestros diseños mejor valorados por nuestros clientes"/>
                </div>
                <MiniGaleriaFotos/>
        </section>
    )
}
