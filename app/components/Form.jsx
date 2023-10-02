import React from "react"
import {aceptarNombre} from "../scripts/Formulario"
export default function Formulario(){
    return(
        <div className="form" id="formUser">
            <input id="nombre" type="text" placeholder="Nombre"></input>
            <button class="btn-outline-secondary" onclick={aceptarNombre}>Aceptar</button>
        </div>
    )

}