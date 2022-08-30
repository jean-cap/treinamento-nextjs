export default function Filho(props) {
    return (
        <div>
            <h1>Componente filho.</h1>
            <button onClick={() => props.fn('Passei no Enem!')}>Falar com o pai.</button>
        </div>
    );
}