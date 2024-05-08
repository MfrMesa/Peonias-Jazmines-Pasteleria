import { Link } from "react-router-dom";
import classes from "/src/style/Navbar.module.css"
import { HashLink as Anchor } from "react-router-hash-link";

export default function Navbar() {


    return (
        <nav className={classes.navMenu}>
            <ul className={classes.navBar}>
                <li><Link className={classes.navLinks} to="/">HOME</Link></li>
                <li><Link className={classes.navLinks}  to="/galeriaRecetas">RECETAS</Link></li>
                <li><Link className={classes.navLinks}  to="/hacerpedido">HACER UN PEDIDO</Link></li>
                <li><Anchor className={classes.navLinks}  to="#galeria">GALERÍA</Anchor></li>
                <li><Anchor className={classes.navLinks}  to="/productos">PRODUCTOS</Anchor></li>
                <li><Anchor className={classes.navLinks}  to="#contacto"  smooth={true}>CONTACTO</Anchor></li>
                <Link to="/shoppingcart">
                    <img src="/src/img/carrito.svg" className={classes.carrito}/>
                </Link>
            </ul> 
        </nav>
    )
}


