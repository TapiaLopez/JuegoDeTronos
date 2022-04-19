import { Routes, BrowserRouter as Router, Route,  } from "react-router-dom";
import './App.scss';
import Home from './pages/Home/HomeTronosPage';
import Personajes from './pages/Personajes/PersonajesPages'
import Casas from './pages/Casas/CasasPages'
import Cronologia from './pages/Cronologia/CronologiaPage'
import CasasDetail from "./pages/CasasDetalle/CasaDetailPage";
import PersonajeDetail from "./pages/PersonajesDetalles/PersonajeDatailPage";

import VolverPersonajes from "./components/VolverPersonaje/VolverPersonajes";
import VolverHome from "./components/VolverHome/VolverHome"

function App() {
  return (
   <Router>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Personajes" element={<Personajes/>}/>
     <Route path="/Casas" element={<Casas/>}/>
     <Route path="/Cronologia" element={<Cronologia/>}/>
     <Route path="/CasasDetail/:id" element={<CasasDetail/>}/>
     <Route path="/PersonajeDetail/:id" element={<PersonajeDetail/>}/>
     <Route path="/Personajes" element={<VolverPersonajes/>}/>
<Route path="/" element={<VolverHome/>}/>

     </Routes>
    

   </Router>
  
  );


}

export default App;
