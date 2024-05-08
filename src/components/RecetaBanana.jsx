import Receta from "./Receta";
import Titulos from "./Titulos";
import classes from "/src/style/Receta.module.css"
import React from "react";

export default function RecetaBanana() {

    const ingredientes = ["Queso crema 800g", "Crema de leche 300ml", "Azúcar 150g", "Escencia de vainilla 20ml", "Huevos 250g", "Almidón de maíz 50g", "Galleta María 300g", "Mantequilla 200g", "Frutos rojos c/n"];
    const pasos= ["Utilizar papel manteca para forrar un molde redondo de 26 cm de diámetro.",
                "Colocar el queso crema en un bol grande y batir por 5 minutos con batidor de mano o eléctrico, hasta lograr que el queso se vuelva más cremoso. Sin dejar de batir incorporar poco a poco la crema.",
                "Después de unos minutos sumar el azúcar, un huevo y continuar el batido hasta que quede la mezcla bien integrada. Logrado esto, sumar el segundo huevo y continuar batiendo hasta integrar, luego sumar otro huevo, batir hasta integrar y repetir el proceso con los cinco huevos. ",
                "Por último, incorporar la harina y batir por 5 minutos más hasta que todo quede bien mezclado. Pasar el contenido del bol al molde ya forrado con papel manteca.",
                "La cocción tiene que ser suave y pareja para que quede cremosa. Hornear por aproximadamente 55 minutos en el centro del horno con calor arriba y abajo. ",
                "A los 30 minutos de horneado controlar que no se esté quemando, si está muy dorada se puede cubrir con un papel de aluminio y continuar la cocción. Tener en cuenta que en el horno la tarta se inflará, esto es normal, luego se desinflará cuando se enfríe.",
                "Pasado el tiempo de cocción, apagar el horno y abrir levemente la puerta dejando la tarta dentro durante otros 15 minutos. ",
                "Luego retirarla del horno y dejar enfriar a temperatura ambiente. A medida que pierda calor irá tomando más consistencia y reduciendo su volumen. No desmoldar hasta que esté totalmente fría.",
                "Se recomienda dejarla en reposo de un día a otro en la heladera o al menos unas horas. Pasado el tiempo, solo queda disfrutar."]

    return (
        <div className={classes.contenedor}>
            <Titulos title="Banana Bread"/>
            <div className={classes.recetaContenedor}>
            <Receta 
            src1="/src/img/banana.png" 
            src2="/src/img/banana2.png" 
            src3="/src/img/banana3.png" 
            ingredientes={ingredientes} pasos={pasos} fecha="03 de octubre de 2023" tiempo={30}  porciones={8}/>
            </div>
        </div>
    )
}
