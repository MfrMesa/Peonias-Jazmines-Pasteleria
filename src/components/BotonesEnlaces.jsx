import {Link, useNavigate} from  'react-router-dom';
import classes from "/src/style/Button.module.css"

export default function BotonesEnlaces({title, to}){

    const navigate = useNavigate();

    const handleNavigate = (to) => {
        navigate(to);

        window.scrollTo(0, 0);
    };


    return (
            <Link to={to} className={classes.button} onClick={() => handleNavigate()}>{title}</Link>
    )
    
}