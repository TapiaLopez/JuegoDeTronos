import react,{ useState, useEffect} from 'react'
import axios from 'axios';
import "./HomeTronosPage.scss"
import Nav from '../../components/Navegador/nav';

export default function Home (){
return (
<div className='home'>
<Nav/>
<p className='tittle text-fluid'>GAMES OF THRONES</p>
</div>)

}