import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import "../VolverHome/VolverHome.scss"
export default function VolverHome (onSubmit){

    
    const {handleSubmit} = useForm();

    return(
        <div >
       <Link to="/" >
           <img className="tamaño" alt="alternative" src={require("../../assets/home.png")}></img>
       </Link>
        </div>
       
     ) }