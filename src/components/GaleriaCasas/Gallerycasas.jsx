import {  Link, generatePath } from "react-router-dom";
import "../GaleriaCasas/Gallerycasas.scss"

export default function Gallerycasas({casas}){
    const linkStyle = {

        textDecoration: "none",
        color: 'white'
      };
    return(
        <Link  style={linkStyle} to ={generatePath("/CasasDetail/:id",{id: casas.name})}>
            <div className="galeria">
                <figure key={casas._id}>
                    <img className="img-fluid" src={casas.logoURL} alt={casas.logoURL}/>
                    <h3 className="text">{casas.name}</h3>
                    
                </figure>
            </div>
        </Link>
    )
}