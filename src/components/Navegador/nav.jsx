import React from "react"
import { Link } from "react-router-dom"
import "./nav.scss"

export default function Nav(){
    const linkStyle = {

        textDecoration: "none",
        color: 'white'
      };
    return(<div className="divFooter">
        <ul className="footer row">
            <li className="col-4 text-center"><Link to="/Personajes" style={linkStyle}>Characters</Link></li>
            <li className="col-4 text-center"><Link to="/Casas" style={linkStyle}>Houses</Link></li>
            <li className="col-4 text-center"><Link to="/Cronologia" style={linkStyle}>chronology</Link></li>

        </ul>
    </div>
        
    )
}