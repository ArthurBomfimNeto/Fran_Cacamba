import React, { Component } from 'react'
import axios from  'axios'

export default class CacambaForm extends Component {

    constructor() {
        super()
        this.state = {
            codCacamba: "",
            valor: "",
            residuo: "",
            tamanho: "",
            status: false,
            lista:[]
        } 
    }

    setCod(e){
        this.setState({
            codCacamba: e.target.value
        })
    }
    setTamanho(e){
        this.setState({
            tamanho: e.target.value
        })
    }
    setValor(e){
        this.setState({
            valor: e.target.value
        })
    }
    setResiduo(e){
        this.setState({
            residuo: e.target.value
        })
    }
    
    
    salvar(){
        
        const newCacamba = {
            codCacamba: this.state.codCacamba,
            valor: this.state.valor,
            residuo: this.state.residuo,
            tamanho: this.state.tamanho,
            status: this.state.status
        }
        console.log('testando')
        axios.post(`http://localhost:3000/cacamba/`,newCacamba
        ).then(
            resposta => console.log(resposta.data))
    }
    render() {
        return (
              
    
            <div>
                <div>
                    <label htmlFor="Cod"> Codigo Cacamba</label>
                    <input type="text" id="Cod" value={this.state.codCacamba} onChange= {e => this.setCod(e)}/>
                </div>

                <div>
                    <label htmlFor="valor"> Valor</label>
                    <input type="text" id="valor" value={this.state.valor} onChange= {e => this.setValor(e)}/>
                </div>
                <div>
                    <label htmlFor="residuo"> Residuo </label>
                    <input type="text" id="residuo" value={this.state.residuo} onChange= {e => this.setResiduo(e)} />
                </div>

                <div>
                    <label htmlFor="tamanho">Tamanho</label>
                    <input type="text" id="tamanho" value={this.state.tamanho} onChange= {e => this.setTamanho(e)} />
                </div>
                <div>
                    <button type="button" onClick = {e => this.salvar()}>Salvar</button>
                </div> <br/>
                <a href="/buscaCacamba"> <button>Buscar</button></a>
            </div>

        )
    }


}