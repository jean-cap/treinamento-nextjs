import React from "react";

function Titulo(props) {
    return props.pequeno ? (
        <React.Fragment>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </React.Fragment>
    );
}

export default Titulo;