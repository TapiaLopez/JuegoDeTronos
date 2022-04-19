import axios from "axios";
import react,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import CasasPages from "../Casas/CasasPages"
import "./CasaDetail.scss"
import VolverCasas from "../../components/VolverCasas/VolverCasas";
import VolverHome from "../../components/VolverHome/VolverHome";


const CasasDetail = () => {
    const urlCasasDetail = 'https://api.got.show/api/show/houses'
    const [CasasDetail, setCasasDetail] = useState ([]);
    let {id} = useParams();
    useEffect (() => {
        const getCasasDetail = async () =>{
            const res = await axios.get (urlCasasDetail+'/'+id)
            console.log('res')
            console.log(res)

            setCasasDetail(res.data[0])

        }
        getCasasDetail()
    },[])
    console.log('CasasDetail')
    console.log(CasasDetail)
    return (
    <div className="casadetail h-100">
    <VolverCasas/>
    <VolverHome/>
    <div className="paddingContainerCasasDetails">
    <div className="row">
        <div className="col-12 text-center pt-5 pb-5">
            <img className="imagen" src={CasasDetail.logoURL} alt={CasasDetail.logoURL}/>
            <h3 className="separacion">{CasasDetail.name}</h3>

        </div>
    </div>

    <div className="row">
        <div className="col-2 text-center pb-5">
                <p>seat</p>
            <h5 className="letra">{CasasDetail.seat}</h5>
        </div>
        <div className="col-2 text-center">
        <p className="letra1">allegiance</p>
<h5 className="letra">{CasasDetail.allegiance}</h5>
        </div>
        <div className="col-2 text-center">
        <p className="letra1">region</p>
<h5 className="letra">{CasasDetail.region}</h5>
        </div>
        <div className="col-2 text-center">
        <p className="letra1">religion</p>
<h5 className="letra">{CasasDetail.religion}</h5>
        </div>
        <div className="col-2 text-center">
        <p className="letra1">sigil</p>
<h5 className="letra">{CasasDetail.sigil}</h5>
        </div>
        <div className="col-2 text-center">
        <p className="letra1">words</p>
<h5 className="letra">{CasasDetail.words}</h5>
        </div>

    </div>
    </div>
   </div>
    )
}





export default CasasDetail