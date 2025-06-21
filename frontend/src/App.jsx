import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UpdateUser from "./pages/UpdateUser.jsx";
import UpdateImovel from "./pages/UpdateImovel.jsx";
import Carrinho from "./pages/Carrinho.jsx";
import Pagamento from "./pages/Pagamento.jsx";
import Imovel from "./pages/Imovel.jsx";
import Perfil from "./pages/Perfil.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id/carrinho" element={<Carrinho />} />
        <Route path="/:id/pagamento" element={<Pagamento />} />
        <Route path="/:id/imovel" element={<Imovel />} />
        <Route path="/:id/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userUpdate" element={<UpdateUser />} />
        <Route path="/imovelUpdate" element={<UpdateImovel />} />
      </Routes>
    </>
  );
}

export default App;