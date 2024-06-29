import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import NotFound from './paginas/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;