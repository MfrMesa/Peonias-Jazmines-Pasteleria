import React, { useState } from 'react';
import CardRecetas from './CardRecetas.jsx';
import { Link } from 'react-router-dom';
import classes from "/src/style/PaginaRecetas.module.css"

export default function ListaRecetas({ recetas }) {

    const [search, setSearch] = useState('');
    const [recetasFiltradas, setRecetasFiltradas] = useState(recetas);

    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        setSearch(searchTerm);

        const recetasPorBusqueda = recetas.filter(receta =>
            receta.nombreReceta.toLowerCase().includes(searchTerm) ||
            receta.descripcion.toLowerCase().includes(searchTerm)
        );

        setRecetasFiltradas(recetasPorBusqueda);
    }

    return (
        <>
            <div className={classes.searchContainer}>
                <input type="text" placeholder="Buscar..." value={search} onChange={handleSearch} />
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
                    />
                ))}
            </div>
            <div className={classes.pages}>
                <Link to="/page1" className="linksPages">1</Link>
                <Link to="/page2" className="linksPages">2</Link>
            </div>
        </>
    );
}
