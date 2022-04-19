import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    const linkStyle = {

        textDecoration: "none",
        color: 'white',
        height: '29px',        
      

      };
    return(<div >
        <ul >
        <li ><Link className="volver" to="/Personajes"style={linkStyle}>Return</Link></li>
        </ul>
        </div>
    )
    }