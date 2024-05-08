import classesBoton from "/src/style/Button.module.css"
import classes from "/src/style/Formulario.module.css"
import React, { useState, useRef } from "react"
import Titulos from "./Titulos"
import Files from "./Files"
import emailjs from '@emailjs/browser';


function createInfo(){
    return {
        email: "",
        name: "",
        telefono: "",
        fecha: "",
        mensaje: "",
        imagenes: [],
        bizcochoSeleccionado: "",
        buttercreamSeleccionado: "",
        tamañoSeleccionado: "",
    }
}

export default function Formulario() {

    const form = useRef();
    
    const bizcochos = ["CHOCOLATE", "VAINILLA", "CAFE", "CARROT CAKE", "RED VELVET", "ALMENDRAS", "NARANJA", "LIMÓN", "BROWNIE", "CHOCOLATE CHIPS"]
    const buttercream = ["QUESO CREMA", "CHOCOLATE BLANCO", "CHOCOLATE OSCURO", "VAINILLA", "FRUTOS ROJOS", "PISTACHO", "DULCE DE LECHE", "KINDER", "NUTELLA", "LOTUS"]
    const tamaño = ["15cm / 3 porciones", "18cm / 6 porciones", "20cm / 10 porciones", "24cm / 15 porciones", "28cm / 20 porciones", "30cm / 25 porciones" ]

    const [info, setInfo] = useState(createInfo())
    const [visibleBizcochosDropdown, setVisibleBizcochosDropdown] = useState(false)
    const [visibleButtercreamDropdown, setVisibleButtercreamDropdown] = useState(false)
    const [visibleTamañoDropdown, setVisibleTamañoDropdown] = useState(false)


    function handleInputChange(event) {
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    }

    function handleDropdownBizcochos(){
        setVisibleBizcochosDropdown(!visibleBizcochosDropdown)
    }

    function handleDropdownButtercream(){
        setVisibleButtercreamDropdown(!visibleButtercreamDropdown)
    }

    function handleDropdownTamaño(){
        setVisibleTamañoDropdown(!visibleTamañoDropdown)
    }

    function handleSeleccionBizcocho(bizcocho) {
        setInfo((prevInfo) => ({
            ...prevInfo,
            bizcochoSeleccionado: bizcocho,
        }));
        setVisibleBizcochosDropdown(false)
    }
    
    function handleSeleccionButtercream(buttercream) {
        console.log(buttercream)
        setInfo((prevInfo) => ({
            ...prevInfo,
            buttercreamSeleccionado: buttercream,
        }));
        setVisibleButtercreamDropdown(false)
    }

    function handleSeleccionTamaño(tamaño) {
        setInfo((prevInfo) => ({
            ...prevInfo,
            tamañoSeleccionado: tamaño,
        }));
        setVisibleTamañoDropdown(false)
    }

    function handleImagenes(newFiles) {
        setInfo(prevInfo => ({
            ...prevInfo,
            imagenes: newFiles,
        }));
    }


    console.log(info)

    function handleFormSubmit(event){
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
        setInfo(createInfo())
    };


    

    return (
        <form ref={form} onSubmit={handleFormSubmit}>
            <div className={classes.saboresContainer}>
                <div className={classes.listaBizcochosContainer}>
                    <div className={classes.titleContainer} onClick={handleDropdownBizcochos}>
                        <Titulos recetaTitulo={info.bizcochoSeleccionado ? info.bizcochoSeleccionado : "Bizcochos"}/>
                        <img src="/src/img/chevron.svg" className={classes.chevronClick}/>                           
                    </div>
                    {visibleBizcochosDropdown && (
                        <div className={classes.listaContainer}>
                            <ul className={classes.lista}>
                                {bizcochos.map((bizcocho) => (
                                    <li key={bizcocho} className={classes.listaItem} onClick={() => handleSeleccionBizcocho(bizcocho)}>
                                        {bizcocho}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className={classes.listaButtercreamContainer}>
                    <div className={classes.titleContainer} onClick={handleDropdownButtercream}>
                    <Titulos recetaTitulo={info.buttercreamSeleccionado ? info.buttercreamSeleccionado : "Buttercream"}/>
                        <img src="/src/img/chevron.svg" className={classes.chevronClick}/>                            
                    </div>
                    {visibleButtercreamDropdown && (
                        <div className={classes.listaContainer}>
                            <ul className={classes.lista}>
                                {buttercream.map((relleno) => (
                                    <li key={relleno} className={classes.listaItem} onClick={() => handleSeleccionButtercream(relleno)}>
                                        {relleno}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className={classes.listaTamañoContainer}>
                    <div className={classes.titleContainer} onClick={handleDropdownTamaño}>
                        <Titulos recetaTitulo={info.tamañoSeleccionado ? info.tamañoSeleccionado : "Tamaño"}/>
                        <img src="/src/img/chevron.svg" className={classes.chevronClick}/>
                    </div>
                    {visibleTamañoDropdown && (
                        <div className={classes.listaContainer}>
                            <ul className={classes.lista}>
                                {tamaño.map((size) => (
                                    <li key={size} className={classes.listaItem} onClick={() => handleSeleccionTamaño(size)}>
                                        {size}
                                    </li>
                                ))}
                            </ul>
                            <p>{info.tamañoSeleccionado}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.formulario}>
                <div className={classes.wrapperinput1}>
                    <label htmlFor="email">Email:</label>
                    <input className={classes.inputs} name="email" type="email" value={info.email} placeholder="Correo..." onChange={handleInputChange}/>
                </div>
                <div className={classes.wrapperinput2}>
                    <label htmlFor="name">Nombre completo:</label>
                    <input className={classes.inputs} name="name" type="text" value={info.name} placeholder="Nombre..." onChange={handleInputChange}/>
                </div>
                <div className={classes.wrapperinput3}>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input className={classes.inputs} name="telefono" type="number" value={info.telefono} placeholder="Teléfono..." onChange={handleInputChange}/>
                </div>
                <div className={classes.wrapperinput4}>
                    <label htmlFor="fecha">Fecha de entrega:</label>
                    <input className={classes.inputs} name="fecha" type="text" pattern="\d{4}-\d{2}-\d{2}" value={info.fecha} placeholder="YYYY-MM-DD" onChange={handleInputChange}/>
                </div>
                <div className={classes.wrapperinput5}>
                    <label htmlFor="mensaje">Detalles del pedido:</label>
                    <textarea name="mensaje" itemType="text" value={info.mensaje} placeholder="¿En qué podemos ayudarle...?" onChange={handleInputChange}></textarea>
                </div>
                <div className={classes.wrapperinput6} name="imagenes" onChange={handleImagenes}>
                    <Files />
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classesBoton.button} type="submit">enviar</button>
            </div>
        </form>
    )
}
