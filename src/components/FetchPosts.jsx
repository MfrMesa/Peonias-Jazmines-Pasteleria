import Titulos from "./Titulos";
import BotonesEnlaces from "./BotonesEnlaces";
import classes from "/src/style/FetchPosts.module.css"
import { Link } from "react-router-dom";


export default function FetchPosts() {

    return (
            <section className={classes.postsInstagram}>
                <Titulos miniTitle="INSTAGRAM"/>
                    <div className={classes.postContenedor}>
                        <div className={classes.downGaleriaContenedor1}>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto} src="/src/img/tarta14.png" alt="posts Instagram"/>
                            </Link>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto}  src="/src/img/tarta19.png" alt="posts Instagram"/>
                            </Link>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto} src="/src/img/tarta16.png" alt="posts Instagram"/>
                            </Link>
                        </div>
                        <div className={classes.downGaleriaContenedor2}>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto} src="/src/img/tarta14.png" alt="posts Instagram"/>
                            </Link>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto} src="/src/img/tarta19.png" alt="posts Instagram"/>
                            </Link>
                            <Link to="https://www.instagram.com/sweetvelvetcake/">
                                <img id="tartainsta" className={classes.foto} src="/src/img/tarta16.png" alt="posts Instagram"/>
                            </Link>
                        </div>
                    </div>
                    <BotonesEnlaces to="https://www.instagram.com/sweetvelvetcake/" title="ver últimos posts"/>
            </section>
    )
}
