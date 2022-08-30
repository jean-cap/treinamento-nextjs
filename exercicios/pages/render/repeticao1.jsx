import { Fragment } from "react";

export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ];

    function renderizarLista() {
        return listaAprovados.map(function (nome, index) {
            return <li key={index}>{nome}</li>
        })
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    );
}

// function renderizarLista() {
//     const itens = [];

//     for (let index = 0; index < listaAprovados.length; index++) {
//         itens.push(<li key={index}>{listaAprovados[index]}</li>);
//     }

//     return (
//         <Fragment>
//             {itens}
//         </Fragment>
//     );
// }