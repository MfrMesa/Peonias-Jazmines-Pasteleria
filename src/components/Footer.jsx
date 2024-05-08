import Contacto from "./Contacto";
import FetchPosts from "./FetchPosts";
import Divider from "./Divider";
import UltimasRecetas from "./UltimasRecetas"
import classes from "/src/style/Footer.module.css"
import recetas from "/src/recetasInfo.js"


export default function Footer() {


    return (
            <footer className={classes.footerContenedor}>
                <div className={classes.footer}>
                    <Contacto/>
                    <UltimasRecetas  recetas={recetas} id={recetas.id}/>
                    <FetchPosts/>
                </div>
                <div className={classes.footerBottom}>
                <Divider width={105}/>
                <span className={classes.piePagina}>Pastelería Peonías & Jazmines Est-2024</span>
                </div>
            </footer>
    )
}
