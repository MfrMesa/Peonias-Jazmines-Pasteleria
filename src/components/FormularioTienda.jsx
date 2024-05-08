import React, { useState } from 'react'
import classes from "/src/style/FormularioTienda.module.css"
import emailjs from '@emailjs/browser';
import ProductoInfo from './ProductoInfo';
import Comprobante from './Comprobante';
import MensajeCompra from './MensajeCompra';
import style from "/src/style/Button.module.css"


function createData(){
    return {
        nombre: "",
        telefono: "",
        email: "",
        horario: "",
        mensaje: "",
        imagenes: [],
        metodoPago: "",
    }
}



export default function FormularioTienda() {

    const [mostrarMensajeCompra, setMostrarMensajeCompra] = useState(false);
    const [info, setInfo] = useState(createData())



    function handleChange(event){
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    }

    function handleCheckChange(metodoPago, isChecked) {
        setInfo(prevInfo => ({
            ...prevInfo,
            metodoPago: isChecked ? metodoPago : "no hay metodo",
        }));
    }


    function handleImagenes(newFiles) {
        setInfo(prevInfo => ({
            ...prevInfo,
            imagenes: newFiles,
        }));
    }



    console.log(info)

    function handleSubmit(event){
        event.preventDefault();
            
        emailjs
            .sendForm('service_r5da7gh', 'template_1vugzp6', form.current, {
                publicKey: '-tVycMvnjnCHq8v9N',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        setInfo(createData())
    };

    function handleMensaje(event) {
        event.preventDefault();
        setMostrarMensajeCompra(true); 
        
    }



    return (
        <div className={mostrarMensajeCompra ? "mensaje-compra-visible" : "mensaje-compra-oculto"}>
        {mostrarMensajeCompra ? (
            <MensajeCompra />
        ) : (
            <section  className={classes.contenedor}>
                <form onSubmit={handleSubmit} className={classes.formularioContainer}>
                <div  className={classes.formulario}>
                    <h4 className={classes.titulo}>Información de contacto:</h4>
                    <div className={classes.infoContenedor}> 
                        <div className={classes.info}>
                            <label htmlFor="horario" className={classes.labels}>horario de recogida:</label>
                            <input type="text" name="horario" onChange={handleChange} value={info.horario} className={classes.inputs}/>
                        </div>
                        <div className={classes.info}>
                            <label htmlFor="nombre" className={classes.labels}>nombre:</label>
                            <input type="text" name="nombre" onChange={handleChange} value={info.nombre} className={classes.inputs}/>
                        </div>
                    </div>
                    <div className={classes.infoContenedor}> 
                        <div className={classes.info}>
                            <label htmlFor="telefono" className={classes.labels}>teléfono:</label>
                            <input type="text" name="telefono" onChange={handleChange} value={info.telefono} className={classes.inputs}/>
                        </div>
                        <div className={classes.info}>
                            <label htmlFor="email" className={classes.labels}>email:</label>
                            <input type="text" name="email" onChange={handleChange} value={info.email} className={classes.inputs}/>
                        </div>
                    </div>
                    <div className={classes.infoContenedor}> 
                        <div className={classes.info}>
                            <label htmlFor="mensaje"  className={classes.labels}>Información relevante:</label>
                            <textarea name="mensaje" itemType="text" value={info.mensaje} placeholder="(alergías, intolerancias, etc..)" onChange={handleChange} className={classes.inputs}></textarea>
                        </div>
                        <div name="imagenes" className={classes.comprobante} onChange={handleImagenes}>
                            <Comprobante/>
                        </div>
                    </div>
                </div>
                <div >
                    <ProductoInfo handleCheckChange={handleCheckChange}/>
                </div>
                <div className={classes.botonContainer}>
                        <button type="submit" className={style.button} onClick={handleMensaje}>finalizar compra</button>
                </div>
                </form>
            </section>
        )}
    </div>
    )
}
