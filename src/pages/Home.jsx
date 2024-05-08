import React from 'react'
import Description from "../components/Description";
import DiseñosPopulares from "../components/DiseñosPopulares";
import DivisorPagina from "../components/DivisorPagina";
import RecetasDestacadas from "../components/RecetasDestacadas";

export default function Home() {



    return (
        <>
            <Description/>
            <DiseñosPopulares/>
            <DivisorPagina/>
            <RecetasDestacadas/>
        </>
    )
}
