import classes from "/src/style/Titulos.module.css"

export default function Divider({width}) {
    
    return (
    <span className={classes.divisor} style={{width: width + "%"}}></span>
)
}
