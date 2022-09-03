import { useRouter } from "next/router";

export default function Params(props) {
    const router = useRouter();

    let nome = router.query.nome;
    let idade = router.query.idade;

    return (
        <div>
            <h1>Passando parâmetros nas rotas.</h1>

            <p>{nome} tem {idade} anos.</p>
        </div>
    );
}