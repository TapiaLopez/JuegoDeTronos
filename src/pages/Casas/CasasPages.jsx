import react,{ useState, useEffect} from 'react'
import axios from 'axios';
import Gallerycasas from '../../components/GaleriaCasas/Gallerycasas';
import CasasDetail from '../CasasDetalle/CasaDetailPage';
import Buscador from '../../components/Buscador/Buscador';
import "./CasasPages.scss"
import Nav from '../../components/Navegador/nav';
import VolverHome from '../../components/VolverHome/VolverHome';


export default function Casas (){
    
    let [casas, setCasas] = useState([]) 

    
    console.log(casas)
        
        const getCasas = async () =>{
            const res= await axios.get("https://api.got.show/api/show/houses/")
            setCasas (res.data)
            console.log(res.data)

        }
        useEffect(() => {

            getCasas();
        }, [])

        
        console.log(CasasDetail)
            return (<div className="h-100 bgDark">
          <Nav/>
        

            <Buscador 
                  onSubmit={(data)=> {
                    console.log(data)
                    getCasas(
                    data.name.length !== 0 ? data.name: ""
                )} }
            />
              <VolverHome/>
            
              <div className="paddingContainerCasas">
              <div className="contenedorFull">


                        <div className='casas row'>

            {casas.map((casa)=>(
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
                <div>
                <Gallerycasas className='colortext' key ={casa._id} casas={casa} />
                </div>
                </div>
            ))
            }
</div>
</div>
</div>
            </div>
            )
}