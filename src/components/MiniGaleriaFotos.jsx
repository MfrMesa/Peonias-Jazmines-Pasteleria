import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "/src/style/MiniGaleriaFotos.module.css"
import { useState } from "react";
import FotoDescripcion from "./FotoDescripcion";


        
        export default function MiniGaleriaFotos() {

                const [modalOpen, setModalOpen] = useState(false);
                const [selectedImage, setSelectedImage] = useState(null);

                function handleZoom(imageSrc) {
                setSelectedImage(imageSrc);
                setModalOpen(true);
                }

                function closeModal() {
                setSelectedImage(null);
                setModalOpen(false);
                }
        
                const settings = {
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 8000,
                pauseOnHover: true,
                cssEase: 'linear',
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
                <section className={classes.fotosDestacadasHome}>
                <Slider {...settings}>
                        <div>
                        <img onClick={() => handleZoom("/src/img/tarta1.png")} src="/src/img/tarta1.png" alt="foto Navidad" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta2.png")} src="/src/img/tarta2.png" alt="foto Civil" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta3.png")} src="/src/img/tarta3.png" alt="foto Rey Leon" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta4.png")} src="/src/img/tarta4.png" alt="Tarta Maiquetia" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta5.png")} src="/src/img/tarta5.png" alt="Tarta Bailarina" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta6.png")} src="/src/img/tarta6.png" alt="Tarta Bebe" className={classes.foto}/>
                        </div>
                        <div>
                        <img onClick={() => handleZoom("/src/img/tarta7.png")}  src="/src/img/tarta7.png" alt="Tarta Mandala" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta9.png")} src="/src/img/tarta9.png" alt="Tarta Boda" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta10.png")} src="/src/img/tarta10.png" alt="Tarta Avila" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta11.png")} src="/src/img/tarta11.png" alt="Tarta Bautizo" className={classes.foto}/>
                        </div>
                        <div>
                        <img onClick={() => handleZoom("/src/img/tarta12.png")}  src="/src/img/tarta12.png" alt="Tarta Arte" className={classes.foto}/>
                        </div>
                        <div>
                        <img  onClick={() => handleZoom("/src/img/tarta13.png")} src="/src/img/tarta13.png" alt="Tarta Alien Morado" className={classes.foto}/>
                        </div>
                        </Slider>
                        {modalOpen && (
                        <div className={classes.modalOverlay} onClick={closeModal}>
                                <img src="/src/img/closeButton.svg" className={classes.closeButton} />
                                <div className={classes.modalContent}>
                                        <img src={selectedImage} alt="Ampliación" className={classes.modalImage} />
                                        <FotoDescripcion/>
                                </div>
                        </div>
                        )}
                </section>
)
}
