import Filho from "./Filho";

export default function Pai(props) {
    function falarComigo(mensagem) {
        console.log(mensagem);
    }

    return (
        <div>
            <Filho fn={falarComigo} />
        </div>
    );
}