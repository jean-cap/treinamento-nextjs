import Estilo from "../../components/Estilo";

function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="red" />
            <Estilo numero={0} color="#fff" direita />
        </div>
    );
}

export default usandoEstilo;