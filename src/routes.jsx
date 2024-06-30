import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "src/paginas/Inicio";
import SobreMim from "src/paginas/SobreMim";
import NotFound from "src/paginas/NotFound";
import Menu from "src/componentes/Menu";
import PaginaPadrao from "src/componentes/PaginaPadrao";
import ScrollToTop from "src/componentes/ScrollToTop";
import Rodape from "src/componentes/Rodape";
import Post from "src/paginas/Post";

function AppRoutes() {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        
        <Routes>
          
          <Route path="/" element={<PaginaPadrao/>} >
            <Route index element={<Inicio/>} />
            <Route path="/sobre-mim" element={<SobreMim />} />
          </Route>

          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
  );
}

export default AppRoutes;
