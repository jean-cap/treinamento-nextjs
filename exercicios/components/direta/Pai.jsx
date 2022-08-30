import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Jean" familia={props.familia} />
            <Filho {...props} nome="Bianca" />
        </div>
    );
}