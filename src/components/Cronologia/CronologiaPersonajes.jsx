import {  Link, generatePath } from "react-router-dom";
import "./CronologiaPersonajes.scss"

export default function Cronologiapersonajes({personajes}){
    const linkStyle = {

        textDecoration: "none",
        color: 'white'
      };

    return(
    <Link style={linkStyle}  className="galeriaC" to ={generatePath("/PersonajeDetail/:id",{id: personajes.name})}>
            <div>
                <figure  key={personajes.id}>
                {(() => { if (personajes.age) return <div className="estiloedad"> {personajes.age.age}</div> })()}

                    <h3 >{personajes.name}</h3>
                    
                    <img className="imagenGaleria rounded-circle" src={personajes.image} alt={personajes.image} />


                </figure>
            </div>
    </Link>
    )
}