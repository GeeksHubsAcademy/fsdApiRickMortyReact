
import React, { Component } from 'react';
import axios from 'axios';

import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props); // Requerido!!

        this.state = { 
            personajes : [],
        };
    }

    async componentDidMount(){ //el componente se ha montado

        let resultado = await axios.get('https://rickandmortyapi.com/api/character');
        
        setTimeout(()=>{
            this.setState({personajes : resultado.data.results});
        },2000)
        

    }

    componentDidUpdate(){ //el componente se ha actualizado
        console.log(this.state.personajes);
    }

    
    render() {

        if(!this.state.personajes[1]){
            return (
                <div className="contenedorContador">
                    CARGANDO DATOS
                </div>
            )
        } else {

            return (
                <div className="contenedorContador">
                   {this.state.personajes.map((personaje)=>(
                    
                           <div key={personaje.id}>{personaje.name}</div>
                       
                   ))}
                </div>
            )

        }
        
    };
}

export default Home;