import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Contacto from './components/Contacto/Contacto';
import Login from './components/Login/Login';
import PerfilEmpresa from './components/PerfilEmpresa/PerfilEmpresa';
import Registro from './components/Registro/Registro';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfilempresa" element={<PerfilEmpresa />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
      </Routes>
    </Router>
  );
}

export default App;