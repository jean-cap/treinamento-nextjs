import { useRouter } from "next/router";

export default function Buscar(props) {
    const router = useRouter();

    return (
        <div>
            <h1>Olá {router.query.id}!</h1>
        </div>
    );
}