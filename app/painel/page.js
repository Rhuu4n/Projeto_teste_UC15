import Produtos from "../loja/produtos";

export default function Painel(){

    const usuarios = [{
        id: 1,
        nome: "Jorge",
        idade: 156
    }, 
    {
        id: 2,
        nome: "Gorge",
        idade: 651
    }, 
    {
        id: 3,
        nome: "Danilo",
        idade: 12
    }]

    const produtos = [{
        id: 1,
        nome: "Calça",
        preco: 79.75,
        disponiveis: 25,
    },
    {
        id: 2,
        nome: "alguma-coisa",
        preco: 79.85,
        disponiveis: 0,
    },
    {
        id: 2,
        nome: "alguma outra coisa",
        preco: 79.95,
        disponiveis: 1,
    }

    ]

    return(
        <div>
            <h1>Painel do administrador</h1>
            <hr/>
            <h2>Lista de usuários</h2>
            <ul>
                {usuarios.map(u => {return <li>Nome: {u.nome}, Ídade: {u.idade}</li>})}
            </ul>
            <h2>Lista de produtos</h2>
            <ul>
                {produtos.map(p => {return (<div>
                                                <li>Produto:{p.nome}</li>
                                                <p>R${p.preco}</p>
                                                <div>
                                                {p.disponiveis>0 ?
                                                    <p>Quantidade: {p.disponiveis} - <button>Comprar</button></p>
                                                    :
                                                    <p>Produto indisponivel</p>}
                                                </div>
                                                  <hr/> 
                                             </div>);})}
            </ul>
        </div>
    );
}