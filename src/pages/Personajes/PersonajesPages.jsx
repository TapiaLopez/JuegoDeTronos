import react,{ useState, useEffect} from 'react'
import axios from 'axios';
import Gallerypersonajes from '../../components/GaleriaPersonajes/Gallerypersonajes'
import "./PersonajesPages.scss"
import Buscador from '../../components/Buscador/Buscador'
import Nav from '../../components/Navegador/nav';
import VolverHome from '../../components/VolverHome/VolverHome';

export default function Personajes (){
    
    let [personajes, setPersonajes] = useState([] || {}) 
    
    console.log(personajes)
    const getPersonajes = async (miVariableDeBusqueda = "") =>{
        const res= await axios.get(`https://api.got.show/api/show/characters/${miVariableDeBusqueda}`)
        if (miVariableDeBusqueda === "")
        setPersonajes (res.data)
        else setPersonajes ([res.data])
        console.log(res.data)

    }
    

    useEffect(() => {
        
            getPersonajes();
        }, [])

        
            return (<div className="h-100 bgDark">
                       <Nav/>

            <Buscador 
                onSubmit={(data)=> {
                    console.log(data)
                    getPersonajes(
                    data.name.length !== 0 ? data.name: ""
                )} }
            />
  <VolverHome/>

  <div className="paddingContainerPersonajes">
  <div className="contenedorFull ">

            <div className='personajes row'>
            
            {personajes.map((personaje)=>{
                return (<div className=" col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key ={personaje.id}>
                        <Gallerypersonajes key ={personaje.id} personajes= {personaje} />
                        </div>)
            })

            
            }
            </div>
            </div>
            </div>
            </div>)
}