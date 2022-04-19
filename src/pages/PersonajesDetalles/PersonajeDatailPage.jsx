import axios from "axios";
import react,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import personajes from "../Personajes/PersonajesPages";
import "./PersonajeDetailPage.scss"
import VolverPersonajes from "../../components/VolverPersonaje/VolverPersonajes";
import VolverHome from "../../components/VolverHome/VolverHome";


const PersonajeDetail = () => {
    const urlPersonajeDetail = 'https://api.got.show/api/show/characters'
    const [myLogo, setMyLogo] = useState ({});
    const [PersonajeDetail, setPersonajeDetail] = useState ({});
    const urlCasasDetail = 'https://api.got.show/api/show/houses'
    let {id} = useParams();
    useEffect (() => {
        const getPersonajeDetail = async () =>{
            const res = await axios.get (urlPersonajeDetail+'/'+id)
            setPersonajeDetail(res.data)

            fetch(urlCasasDetail+'/'+res.data.house, {
                method: 'GET',
                headers:{
                  'Content-Type': 'application/json'
                }
              }).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => {
                  console.log(response)
                  if (response) {
                      console.log("IF RESPONSE")
                      if (response[0]) {
                          console.log("IF RESPONSE 0")
                          console.log('response[0]')
                          console.log(response[0])
                          setMyLogo(response[0].logoURL)
                      }
                      }
                  } )

        }
        getPersonajeDetail()

    },[])
    

    

    return (<div className="personajesdetail h-100">
   
     <VolverPersonajes/>
     <VolverHome/>
<div className="paddingContainerPersonajesDetails">
    <div className="row marginNone">
        <div className="col-12 text-center">
        <img src={PersonajeDetail.image} alt={PersonajeDetail.image}/>
    <div className="separacion">{PersonajeDetail.name}</div> 
    </div>
    </div>
    <div className="row marginNone">
        <div className="col-2 text-center">
    <p className="letra1">House</p>
    <img src={myLogo} alt={PersonajeDetail.logoURL}/>
</div>
        <div className="col-2 text-center">

    <p className="letra1">Allegiances</p>
        <div className="letra" >{PersonajeDetail.allegiances}</div> 
</div>
        <div className="col-2 text-center">

        <p className="letra1">Appearances</p>
        <div className="maxHeight letra" >{PersonajeDetail.appearances}</div> 
</div>
        <div className="col-2 text-center">

        <p className="letra1">Father</p>
        <div className="letra">{PersonajeDetail.father}</div> 
</div>
        <div className="col-2 text-center">

        <p className="letra1">Familie</p>
        <div className="letra">{PersonajeDetail.siblings}</div> 
</div>
        <div className="col-2 text-center">

        <p className="letra1" >Titles</p>
        <div className=" maxHeight letra">{PersonajeDetail.titles}</div> 
        </div>
</div>
</div>
    </div>
    )
}





export default PersonajeDetail