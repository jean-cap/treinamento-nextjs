import { useState } from "react";

export default function Form() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    async function salvarUsuario() {
        await fetch("http://localhost:3000/api/form", {
            method: "POST",
            body: JSON.stringify({ nome, idade })
        });

        const resp = await fetch("http://localhost:3000/api/form");
        const usuarios = await resp.json();

        setUsuarios(usuarios);
    }

    function renderizarUsuarios() {
        if (usuarios) {
            return usuarios.map((usuario, index) => <li key={index}>{usuario.nome} - {usuario.idade}</li>)
        }
        return false;
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>

            <div>
                <input name="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
                <input name="idade" type="number" value={idade} onChange={(event) => setIdade(+event.target.value)} />

                <button onClick={salvarUsuario}>Salvar</button>

                <hr />

                <ul>
                    {renderizarUsuarios()}
                </ul>
            </div>
        </div>
    );
}