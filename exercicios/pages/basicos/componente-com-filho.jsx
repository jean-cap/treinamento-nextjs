import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function ComponenteComFilho() {
    return (
        <Lista>
            <Item conteudo="Item 11" />
            <Item conteudo="Item 12" />
            <Item conteudo="Item 13" />
        </Lista>
    );
}