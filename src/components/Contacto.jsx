import Titulos from './Titulos'
import { Link } from 'react-router-dom'
import classes from "/src/style/Contacto.module.css"

export default function Contacto() {


    return (
            <section id="contacto" className={classes.contactoFooter}>
                    <Titulos miniTitle="CONTÁCTANOS"/> 
                    <div  className={classes.downcontacto}>
                        <p className={classes.direccion}>
                            Calle Jazmines, Madrid
                        </p>
                        <p className={classes.direccion}>
                            Madrid, 28033
                        </p>
                        <Link className={classes.email}>hello@peonias&jazmines.com</Link>
                        <span className={classes.telefono}>+34 667 38 35 72</span>
                    </div>
                </section>
    )
}
