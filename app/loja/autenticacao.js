export default function Autenticacao(){
    
    return(
        < div>

            <p>Conecte-se para continuar</p>

            <form onSubmit={ (event)=> enviarFormulario(event) }>
                <label>
                    Digite seu usuario:
                    <input onChange={ (event)=> { alteraInputUsuario(event.target.value) }}/>
                </label>

                <br/>

                <label>
                    Digite sua senha:
                    <input type="password"/>
                </label>

                <br/>

                <button>Entrar</button>
            </form>

        </div>
    );
}