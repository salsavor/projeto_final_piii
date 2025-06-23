import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import UpdateUser from "./pages/UpdateUser/UpdateUser.jsx";
import UpdateImovel from "./pages/UpdateImovel/UpdateImovel.jsx";
import Carrinho from "./pages/Carrinho/Carrinho.jsx";
import Pagamento from "./pages/Pagamento/Pagamento.jsx";
import Imovel from "./pages/Imovel/Imovel.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import Contact from "./pages/Contact/Contact.jsx";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;