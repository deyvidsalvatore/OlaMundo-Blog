import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import NotFound from "./paginas/NotFound";
import Menu from "./componentes/Menu";
import React from "react";

function AppRoutes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default AppRoutes;
