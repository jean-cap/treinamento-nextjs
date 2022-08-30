import If from "../../components/If";

export default function Condicional2() {
    let numero = 5;

    return (
        <div>
            <If teste={numero % 2 === 0}>
                <strong>O número {numero} é par.</strong>
            </If>
            <If teste={numero % 2 === 1}>
                <strong>O número {numero} é ímpar.</strong>
            </If>
        </div>
    );
}