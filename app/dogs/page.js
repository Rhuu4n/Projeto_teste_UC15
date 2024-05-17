"use client"

import axios from "axios";
import { useState } from "react";
import "./dog.css"

export default function Dogs(){

    const [racas, alteraRacas] = useState([]);

    function buscarDogguinho(){

        axios.get("https://dog.ceo/api/breeds/list/all")
        .then( function(response){
            alteraRacas( Object.keys( response.data.message ) )
        })

    }

    return(
    <div id="dog">
        <div>
            <h1>Página dos dog</h1>
            <h2> consulte e encontre fotos de dogguinhos</h2>
        </div>
        <button onClick={()=> buscarDogguinho()}>Carregar raças</button>
        <div className="layout-central">
            <div className="layout-menu">
                <h3>dogguinhos</h3>
                <ul>
                    {racas.map(r => {return(<li>{r}</li>)})}
                </ul>
            </div>
            <div>
                <h2>Pitbull</h2>
                <img src="https://via.placeholder.com/200"/>
                <img src="https://via.placeholder.com/200"/>
                <img src="https://via.placeholder.com/200"/>
            </div>
        </div>
    </div>
    );
}