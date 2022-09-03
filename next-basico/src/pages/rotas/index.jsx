import Link from 'next/link'
import { useRouter } from "next/router";

export default function Rota() {
    const router = useRouter();

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                nome: "Bianca",
                idade: "21"
            }
        })
    }

    return (
        <div>
            <h1>Página inicial de Rotas</h1>

            <ul>
                <li>
                    <Link href="/rotas/params?nome=Jean&idade=42">
                        <a>Params</a>
                    </Link>
                </li>
            </ul>

            <div style={{display: "flex", flexDirection: "column"}}>
                <button onClick={() => router.push("/rotas/Jean/buscar")}>Buscar</button>
                <button onClick={navegacaoComParams}>Params</button>
            </div>
        </div>
    );
}