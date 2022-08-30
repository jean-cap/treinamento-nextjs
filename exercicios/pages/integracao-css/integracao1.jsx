import estilo from './integracao1.module.css';

export default function integracao1() {
    return (
        <div>
            <div className={estilo.vermelha}>Texto #01</div>
            <div className={estilo.azul}>Texto #02</div>
            <div className={estilo.branca}>Texto #03</div>
        </div>
    );
}