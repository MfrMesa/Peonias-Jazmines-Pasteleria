import Titulos from './Titulos';
import classes from "/src/style/Receta.module.css"
import Slider from 'react-slick';


function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
    <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
    >
    <svg className={classes.svgleft} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 47">
            <path d="M0.0735302 40.8833L12.9835 23.444L0.278748 5.72679L4.25323 0.357928L20.8973 23.518L3.98467 46.3643L0.0735302 40.8833Z"/>
    </svg>
    </div>
    );
}

function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
    <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
    >
    <svg className={classes.svgright} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 47">
    <path d="M0.0735302 40.8833L12.9835 23.444L0.278748 5.72679L4.25323 0.357928L20.8973 23.518L3.98467 46.3643L0.0735302 40.8833Z"/>
    </svg>
    </div>
    );
}


export default function Receta({pasos, tiempo, porciones, src1, src2, src3, fecha, ingredientes}) {


    const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
    {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            }
    },
    {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
    },
    {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
    }
    ]
    };



    return (
        <section className={classes.contenedorReceta}>
        <Slider {...settings}>
        <div >
            <img src={src1} className={classes.foto}/>
        </div>
        <div>
            <img src={src2} className={classes.foto}/>
        </div>
        <div>
            <img src={src3} className={classes.foto}/>
        </div>
        </Slider>
            <article className={classes.receta}>
                <div className={classes.lista}>
                    <Titulos recetaTitulo="INGREDIENTES"/>
                    <ul className={classes.ingredientesReceta}>
                        {ingredientes.map((ingredientes, index) =>
                            <li key={index} className={classes.ingredientes}>{ingredientes}</li>
                        )}
                    </ul>
                </div>
                <div className={classes.texto}>
                <Titulos recetaTitulo="PASO A PASO"/>
                <ul className={classes.descripcionReceta}>
                        {pasos.map((pasos, index) =>
                            <li key={index} className={classes.pasos}>{pasos}</li>
                        )}
                    </ul>
                </div>
            </article>
            <footer className={classes.detalles}>
                <div className={classes.innerDetalles}>
                    <img src="/src/img/clock.svg" className={classes.svg}/>
                    <p className={classes.timer}>tiempo de cocción: {tiempo} min.</p>
                </div>
                <div className={classes.innerDetalles}>
                    <img src="/src/img/user.svg" className={classes.svg}/>
                    <p className={classes.timer}>porciones: {porciones} unidades</p>
                </div>
                    <p className={classes.fecha}>{fecha}</p>
            </footer>
        </section>
    )
}
