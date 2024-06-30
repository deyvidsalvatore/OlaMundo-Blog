import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "src/paginas/Inicio";
import SobreMim from "src/paginas/SobreMim";
import NotFound from "src/paginas/NotFound";
import Menu from "src/componentes/Menu";
import React from "react";
import PaginaPadrao from "./componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao/>} >
            <Route index element={<Inicio/>} />
            <Route path="/sobre-mim" element={<SobreMim />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default AppRoutes;
