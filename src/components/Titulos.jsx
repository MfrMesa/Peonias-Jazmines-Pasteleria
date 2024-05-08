import classes from "/src/style/Titulos.module.css"

export default function Titulos({title, subTitulo, miniTitle, recetaTitulo}) {
    
    return (
            <>
                <h1 className={classes.descripcion}>{title}</h1>
                <h2 className={classes.descripcionTitulo}>{subTitulo}</h2>
                <h3 className={classes.titulo}>{miniTitle}</h3>
                <h3 className={classes.recetaTitulo}>{recetaTitulo}</h3>
            </>
)
}
