import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        
        </BrowserRouter>
    )

}

export default RoutesApp