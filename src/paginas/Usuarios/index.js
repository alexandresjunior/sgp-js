import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { USUARIOS } from "../../mocks/usuarios";

function Usuarios() {
    return (
        <>
            <Cabecalho />

            <section className="container" id="usuarios">
                <h1>Usuarios Cadastrados</h1>

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
                            USUARIOS.map((usuario) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{usuario.id}</th>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.idade}</td>
                                    <td>{usuario.status}</td>
                                    <td>

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