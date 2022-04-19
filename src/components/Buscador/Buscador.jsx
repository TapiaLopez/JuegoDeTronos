import {  Link, generatePath } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../components/Buscador/buscador.scss"

export default function Buscador({onSubmit}){
    const {register, handleSubmit} = useForm();
    return <form  onSubmit={handleSubmit(onSubmit)}>
        <input  placeholder={"search...                        "} className="b-input" {...register("name")} type="text" />
        
    </form>
    
}