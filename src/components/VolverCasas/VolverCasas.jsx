import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

export default function VolverCasas (onSubmit){
    const linkStyle = {

        textDecoration: "none",
        color: 'white'
      };
    const {handleSubmit} = useForm();

    return(<div className="volver">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <ul >
        <li ><Link to="/Casas" style={linkStyle}>Return</Link></li>
        </ul>
        </form>
        </div>
    )
    }