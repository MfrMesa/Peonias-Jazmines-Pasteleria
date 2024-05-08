import { Link, useNavigate } from "react-router-dom";
import classes from "/src/style/RecetasFooter.module.css"


export default function RecetasFooter({to, texto, date}) {

    const navigate = useNavigate();

    const handleNavigate = (to) => {
        navigate(to);

        window.scrollTo(0, 0);
    };

    return (
            <Link className={classes.recetasContenedor} to={to} onClick={() => handleNavigate()}>
                <span className={classes.fechaReceta}>{date}</span>
                <p className={classes.tituloRecetas}>{texto}</p>
            </Link>
    )
}
