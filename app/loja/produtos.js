export default function Produtos(){
    return(
            <div>
                <p>consumir produtos da loja</p>
                <button onClick={()=> alteraAutenticado(false)}>Desconectar</button>
            </div>
    );
}