import Navbar from "./Navbar"
import Banner from "./Banner"
import BotonesEnlaces from "./BotonesEnlaces"
import classes from "/src/style/Header.module.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";


export default function Header() {

    const location = useLocation();

    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubTitulo] = useState('');

    const setTitulos = () => {
        switch (location.pathname) {
            case "/":
                setTitulo("Pastelería Personalizada");
                setSubTitulo("PEONÍAS & JAZMINES");
                break;
            case "/productos":
                setTitulo("¿Se te olvidó la tarta?");
                setSubTitulo("contamos con un stock diario para momentos como estos");
                break;
            case "/galeriaRecetas":
                setTitulo("Recetas que endulzan el alma");
                setSubTitulo("cada semana una nueva");
                break;
            case "/shoppingcart":
                setTitulo("Carrito de compras");
                setSubTitulo("productos");
                break;
            case "/hacerpedido":
                setTitulo("Rellene el siguiente formulario");
                setSubTitulo("para realizar un pedido");
                break;
            default:
                setTitulo("Pastelería Personalizada");
                setSubTitulo("PEONÍAS & JAZMINES");
                break;
        }
    };

    useEffect(() => {
        setTitulos();
    }, [location.pathname]);

    return (
    <header className={classes.headerContenedor}>
        <div className={classes.navbarContenedor}>
            <Navbar/>
        </div>
        <div className={classes.bannerContenedor}>
            <Banner/>
        </div>
        <div className={classes.textoContenedor}>
        {titulo && subtitulo && (
            <>
                <h1 className={classes.title}>{titulo}</h1>
                <h2 className={classes.subTitle}>{subtitulo}</h2>
            </>
        )}
        </div>
        <div className={classes.buttonContainer}>
            <BotonesEnlaces to="/galeriaRecetas" title="ver recetas"  />
            <BotonesEnlaces to="/hacerpedido" title="realizar pedido" />
        </div>
    </header>
)
}
