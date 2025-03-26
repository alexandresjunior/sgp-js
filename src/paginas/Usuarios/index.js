import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { listarUsuarios } from "../../servicos/usuarios";
import { useNavigate } from "react-router-dom";

function Usuarios() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios(setUsuarios);
    }, []);

    return (
        <>
            <Cabecalho />

            <section className="container mt-3" id="usuarios">
                <div className="d-flex justify-content-between">
                    <h1>Usuarios Cadastrados</h1>
                    <div>
                        <a role="button" href="/novo-usuario" className="btn btn-primary">
                            Novo Usuario
                        </a>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Status</th>
                            <th scope="col">Opcoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios?.map((usuario) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{usuario.id}</th>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.idade}</td>
                                    <td>{usuario.status}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <button 
                                                type="button" 
                                                className="btn btn-primary"
                                                onClick={() => navigate(`/usuario/${usuario.id}`)}
                                            >
                                                Editar
                                            </button>
                                            <button type="button" className="btn btn-danger">Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            <Rodape />
        </>
    );
}

export default Usuarios;