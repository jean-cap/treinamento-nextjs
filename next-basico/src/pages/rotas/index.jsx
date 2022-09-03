import Link from 'next/link'

export default function Rota() {
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
        </div>
    );
}