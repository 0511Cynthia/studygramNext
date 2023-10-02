import React from "react"
import Botones from "./components/Botones"
import Navbar from "./components/Navbar"
import Formulario from "./components/Form"
import ContCards from "./components/ContCards"
import Image from "next/image"
import logo from "./Img/logo.png"
import icons from "./Img/icons.png"
import bienvenida from "./Img/bienvenida.png"

import "./styles/page.css"
export default function Main(){
    return(
        <>
        <Navbar></Navbar>
        <Botones></Botones>
        <div>
        <Formulario></Formulario>
        <Image className="logo" src={logo}/>

            <p>@studygram_dig
                mexico
                💖Gracias por apoyar nuestro contenido💖
            </p>
            <Image src={icons}/>
            <Image className="img" src={bienvenida}/>
        </div>
            <ContCards></ContCards>
        </>
    )
}