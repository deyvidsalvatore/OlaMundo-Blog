import { Outlet } from "react-router-dom";
import Banner from "src/componentes/Banner";

export const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    );

};

export default PaginaPadrao;