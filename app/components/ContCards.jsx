import Image from "next/image"
import uDocz from "../Img/uDocz.png"
import LightPdf from "../Img/LightPdf.png"
import EdrawMind from "../Img/EdrawMind.png"
import gana from "../Img/gana.png"
import ia from "../Img/ia.png";
export default function Cartas(){
    return(
        <div class="contCard">
            <div class="card" >
                <Image src={uDocz} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">IDocz</h5>
                    <a href="https://bit.ly/3KSpYmb" class="btn btn-dark">Ir</a>
                </div>
            </div>
            <div class="card">
                <Image src={LightPdf} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Light PDF</h5>
                    <a href="https://lightpdf.com/es/chatdoc" class="btn btn-dark">Ir</a>
            </div>
            </div>
        
            <div class="card">
                <Image src={EdrawMind} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">EdrawMind</h5>
                    <a href="https://www.edrawmind.com/" class="btn btn-dark">Ir</a>
                </div>
            </div>

            <div class="card">
                <Image src={gana} class="card-img-top"/>
                <div class="card-body">
                <h5 class="card-title">Registrate aquí</h5>
                <a href="https://www.edrawmind.com/" class="btn btn-dark">Ir</a>
                </div>
            </div>

            <div class="card">
                <Image src={ia} class="card-img-top"/>
                <div class="card-body">
                <h5 class="card-title">Tareas con IA</h5>
                <a href="https://www.edrawmind.com/" class="btn btn-dark">Ir</a>
                </div>
            </div>
        </div>
    )
}