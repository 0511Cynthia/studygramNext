import {aviso} from "../scripts/avisos"
import {aviso2} from "../scripts/avisos"
export default function Navbar(){
    return(
        <div className="Container">
            <div className="nav" >
                <button class="btn" onclick={aviso} id="btn1">Plantillas</button>
                <button class="btn" onclick={aviso2} id="btn2">Trabaja con nosotros</button>
            </div>
        </div>
        
    )
}