import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";
import Pagina404 from "../paginas/Pagina404";
import Usuarios from "../paginas/Usuarios";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />} />
                <Route path="/dashboard" element={<></>} />
                {/* <Route path="/cadastro" element={<Cadastro />} /> */}
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/projetos" element={<></>} />
                <Route path="/tarefas" element={<></>} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;