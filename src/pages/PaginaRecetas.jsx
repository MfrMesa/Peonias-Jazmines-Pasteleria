import React, { useState } from 'react'
import CardRecetas from '../components/CardRecetas.jsx'
import Titulos from '../components/Titulos.jsx'
import Divider from '../components/Divider.jsx'
import classes from "/src/style/PaginaRecetas.module.css"
import { Link } from 'react-router-dom'
import recetas from "/src/recetasInfo.js"


export default function PaginaRecetas() {


    const opcionesDropdown = [
        "bizcochos",
        "brioches",
        "cheesecakes",
        "cookies",
        "magdalenas",
        "mousses",
        "panes",
        "tartaletas"
    ];


    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [recetasFiltradas, setRecetasFiltradas] = useState(recetas);
    const [search, setSearch] = useState("");




    function handleDropdowRecetas() {
        setVisibleDropdown(!visibleDropdown);
    }


    function handleSelectOption(option) {
        setRecetasFiltradas(recetas.filter(receta => receta.id === option));
        setVisibleDropdown(false); 
    }

    function handleSearch(event) {
        const searchTermino = event.target.value.toLowerCase();
        setSearch(searchTermino);

        const recetasFiltradasPorBusqueda = recetas.filter(receta =>
            receta.nombreReceta.toLowerCase().includes(searchTermino) ||
            receta.descripcion.toLowerCase().includes(searchTermino)
        );

        setRecetasFiltradas(recetasFiltradasPorBusqueda);
    }
    


    return (
        <section className={classes.contenedorSeccion}>
        <Titulos title="Recetas que endulzan el alma"/>
        <Divider width={90}/>
        <div className={classes.filtros}>
            <div className={classes.filtrosDropdown} onClick={handleDropdowRecetas}>
                <span className={classes.filtrosTitulo}>tipo de receta</span>
                <img src="/src/img/chevron.svg" className={classes.chevron}/>
            </div>
            {visibleDropdown && (
                <div className={classes.opcionesContainer}>
                    <ul className={classes.ulContainer}>
                    {opcionesDropdown.map(option => (
                        <li className={classes.opciones} key={option} onClick={() => handleSelectOption(option)}>
                            {option}
                        </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className={classes.searchContainer}>
                <input type="text" placeholder="Buscar..." className={classes.search} value={search} onChange={handleSearch}/>
                <img src="/src/img/lupa.svg" className={classes.lupa}/>
            </div>
        </div>
        <div className={classes.contenedor}>
            {recetasFiltradas.map(receta => (
                    <CardRecetas
                        key={receta.id} 
                        id={receta.id}
                        nombreReceta={receta.nombreReceta}
                        descripcion={receta.descripcion}
                        to={receta.to}
                        src={receta.src}
                        boton="ver receta"
                    />
                ))}
        </div> 
        <div className={classes.pages}>
            <img src="/src/img/chevron.svg" className={classes.svgPages}/>
            <Link to="/page1" className={classes.linksPages}>1</Link>
            <Link to="/page2" className={classes.linksPages}>2</Link>
            <img src="/src/img/chevron.svg" className={classes.svgPagesRigth}/>
        </div>
        </section>
    )
}
