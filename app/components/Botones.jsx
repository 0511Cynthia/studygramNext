import {verForm} from "../scripts/Formulario"
import {cambio} from "../scripts/cambios"

export default function Botones(){
    return(
    <div class="contBtn">
                <div className="">
                    <button type="button" class="cont-btn" id="formUser" onclick={verForm}>Subscribe</button>
                </div>
                <div className="">
                    <button type="button" class="btn" onclick={cambio}>Cambiar</button>
                </div>
                <div class="">
                    <button class="btn" onclick="logMovies()" id="btnAnime">Anime</button>
                </div>   
            </div>
    )
}