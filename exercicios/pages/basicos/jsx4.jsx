import styles from '../../styles/Home.module.css';

function jsx4() {
    const subtitulo = 'Estou no JavaScript!';
    return (
        <div className={styles.container}>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(21, 42)}</h4>
            <h5>{entre(42, 40, 60)}</h5>
        </div>
    );
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return 'Sim';
    }
    return 'Não';
}

export default jsx4;