import Formulario from "../components/Formulario";
import classes from "/src/style/ReservaPedidos.module.css"


export default function ReservaPedidos() {

    return (
            <div className={classes.reservaContenedor}>
            <div className={classes.formularioContenedor}>
                <Formulario/>
            </div>
            </div>
    )
}
