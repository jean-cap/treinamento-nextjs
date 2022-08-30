function lista3() {
    return (
        <div>{gerarLista()}</div>
    );
}

function gerarLista() {
    const lista = [];

    for (let index = 0; index < 10; index++) {
        let conteudo = index === 9 ? index + 1 : `${index + 1},`;
        lista.push(<sapn>{conteudo}</sapn>);
    }

    return lista;
}

export default lista3;