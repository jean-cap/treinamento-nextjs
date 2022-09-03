import { useEffect, useState } from "react";

export default function Questao(props) {
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/42')
            .then(resp => resp.json())
            .then(setQuestao);
    }, []);

    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map((resp, index) => <li key={index}>{resp}</li>);
        }
    }

    return (
        <div>
            <h1>Questão</h1>

            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    );
}