function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    );
}

function gerarLista() {
    return [
        <span>1,</span>,
        <span>2,</span>,
        <span>3,</span>,
        <span>4,</span>,
        <span>5,</span>,
        <span>6,</span>,
        <span>7,</span>,
        <span>8,</span>,
        <span>9,</span>,
        <span>10,</span>
    ];
}

export default lista2;