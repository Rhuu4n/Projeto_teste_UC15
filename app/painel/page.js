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

    return(
        <div>
            <h1>Painel do administrador</h1>
            <hr/>
            <h2>Lista de usuários</h2>
            <ul>
                {usuarios.map(u => {return <li>Nome: {u.nome}, Ídade: {u.idade}</li>})}
            </ul>
        </div>
    );
}