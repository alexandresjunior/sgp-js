import { api } from "./api";

export async function salvarUsuario(dadosUsuario, setExibirModal) {
    await api.post('/usuarios', dadosUsuario)
        .then((resposta) => {
            if (resposta.status === 201) {
                setExibirModal(true);
            }
        })
        .catch((erro) => {
            alert("Erro ao cadastrar usuario.");
            console.error("Erro ao cadastro usuario: ", erro);
        });
}

export async function listarUsuarios(setUsuarios) {
    await api.get('/usuarios')
        .then((resposta) => {
            if (resposta.status === 200) {
                setUsuarios(resposta.data.content)
            }
        })
        .catch((erro) => {
            alert("Erro ao listar usuarios.");
            console.error("Erro ao listar usuarios: ", erro);
        });
}