import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaginaRecetaEntera from "./pages/PaginaRecetaEntera";
import Home from "./pages/Home";
import ReservaPedidos from "./pages/ReservaPedidos";
import PaginaRecetas from "./pages/PaginaRecetas";
import Productos from "./pages/Productos";
import ShoppingCart from "./pages/ShoppingCart";




export default function App() {


    return (
        <>
        <Header/>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hacerPedido" element={<ReservaPedidos />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/galeriarecetas" element={<PaginaRecetas />}/>
                    <Route path="/receta/:id" element={<PaginaRecetaEntera/>} />
                    <Route path="/shoppingcart" element={<ShoppingCart/>}/>
            </Routes>
        <Footer />
        </>
    );
}


    