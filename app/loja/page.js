"use client"

import { useState } from "react";

export default function Loja(){

    const [ inputUsuario, alteraInputUsuario ] = useState("");
    const [ inputSenha, alteraInputSenha ] = useState("");
    const [ autenticado, alteraAutenticado ] = useState(false);
    const [ lista, alteraLista ] = useState("Camisetas");

    function enviarFormulario(){
        event.preventDefault();

        if (inputUsuario == "rhuan" && inputSenha == "123"){
            alteraAutenticado(true);
        }
        else{
            alert("Usuario ou senha incorretos!");
        }
    }

    return(
        <div>

            <h1>Bem-vindo a loja do:{inputUsuario} Senha: {inputSenha}</h1>
            {autenticado == false ?

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
                        <input onChange={ (event)=> { alteraInputSenha(event.target.value) }} type="password"/>
                    </label>

                    <br/>

                    <button>Entrar</button>
                </form>

            </div>

            :

            <div>
                <button onClick={()=> alteraAutenticado(false)}>Desconectar</button>
                <p>consumir produtos da loja</p>

                <h2>menu</h2>

                <ul>
                    <li onClick={()=> alteraLista("Camisetas")}>Camisetas</li>
                    <li onClick={()=> alteraLista("Calças")}>Calças</li>
                </ul>

                {lista == "Camisetas" ? 

                        <div>

                            <h2>Camisetas</h2>

                            <ul>
                                <li>Camiseta azul</li>
                                <li>Camiseta verde</li>
                                <li>Camiseta preta</li>
                            </ul>

                        </div>
                    :

                        <div>

                            <h2>Calças</h2>

                            <ul>
                                <li>calcinha azul</li>
                                <li>calça verde</li>
                            </ul>

                        </div>
                }


            </div>


            }

        </div>

    );
}