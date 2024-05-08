import { Link } from "react-router-dom"
import classes from "/src/style/DivisorPagina.module.css"

export default function DivisorPagina() {

    return (
        <section className={classes.divisorReserva}>
            <Link className={classes.reservaDivisor}  to="/hacerpedido">
                <h1 className={classes.reservaDivisorTitulo}>REALIZAR UN PEDIDO</h1>
            </Link>
        </section>
    )
}
