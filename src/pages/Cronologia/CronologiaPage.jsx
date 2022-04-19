import react,{ useState, useEffect} from 'react'
import axios from 'axios';
import CronologiaPersonajes from '../../components/Cronologia/CronologiaPersonajes'
import "./CronologiaPage.scss"
import Nav from '../../components/Navegador/nav';
import VolverHome from '../../components/VolverHome/VolverHome';

export default function Personajes (){
    
    let [personajes, setPersonajes] = useState([]) 
    
    console.log(personajes)
    useEffect(() => {
        
        const getPersonajes = async () =>{
            const res= await axios.get("https://api.got.show/api/show/characters/")
            setPersonajes (res.data)
            console.log(res.data)

        }
            getPersonajes();
        }, [])

        // eslint-disable-next-line array-callback-return
        personajes.sort((a, b) => {if (a.age && b.age) return a.age.age - b.age.age })
        
            return (<div className="h-100 bgDark">
            <Nav/>
            <VolverHome/>
            <div className="paddingContainerCronologia">
            <div className="contenedorFull ">
            <div className='cronologia row'>
            <div className='col-12 text-center height90'>
            <div className="rounded-circle text-center border-global "><span className='text-center'>0</span></div>
            </div>

            <div className='col-6 marginContainerCol border-par-solo '>
            </div>
            <div className='col-6 marginContainerCol border-impar-solo'>
            </div>

            <div className='col-6 flecha1' >
            </div>
            <div className='col-6 flecha2'>
            </div>

        

            {personajes.map((personaje, i)=>(
                <div className="col-6 marginContainerCol">
                {(() => { if (i === 0) return <div className="border-first "><CronologiaPersonajes key={personaje.id} personajes= {personaje} /></div> })()}
                {(() => { if (i%2 === 0 && i !== 0) return <div className="border-par "><CronologiaPersonajes key={personaje.id} personajes= {personaje} /></div> })()}
                {(() => { if (i%2 === 1 && i !== 0) return <div className="paddingImages border-impar"><CronologiaPersonajes key={personaje.id} personajes= {personaje} /></div> })()}
                </div>
            
            ))
            }
            </div>
            </div>
            </div>
            </div>
            )
}