import {  Link, generatePath } from "react-router-dom";
import "./GalleryPersonajes.scss"

export default function Gallerypersonajes({personajes}){
    const linkStyle = {

        textDecoration: "none",
        color: 'white',
        'font-size': '14px',
      };
    return(
    <Link to ={generatePath("/PersonajeDetail/:id",{id: personajes.name})}>
            <div className="galeriaP">
                <figure key={personajes.id}>
                    <div className="desvanecer2"></div>
                     <h3 style={linkStyle} className="desvanecer">{personajes.name}</h3>  
                    <img src={personajes.image} alt={personajes.image}/>
          


                </figure>
            </div>
    </Link>
    )
}




 
