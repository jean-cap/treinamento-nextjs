import Titulo from "../../components/Titulo";

function main() {
    return (
        <div>
            <Titulo principal="Login" secundario="Informe seu e-mail e sua senha." />
            <Titulo principal="Cadastro" secundario="Inluir, alterar e excluir coisas." pequeno={true} />
            <Titulo principal="Cadastro" secundario="Inluir, alterar e excluir coisas." pequeno />
        </div>
    );
}

export default main;