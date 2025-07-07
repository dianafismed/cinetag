import Inicio from "pages/Inicio.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter> {/*Avisa que haverá rotas na aplicação*/}
      <Routes>{/*Define as rotas da aplicação*/}
        <Route path="/" element={<Inicio />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;