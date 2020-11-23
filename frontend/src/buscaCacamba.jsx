import React, { Component } from 'react'
import axios from  'axios'

export default class buscaCacamba extends Component {
    constructor() {
        super()
        this.state = {
            codCacamba: "",
            valor: "",
            residuo: "",
            tamanho: "",
            status: true,
            lista:[]
        
        }
        this.busca()
    }
    busca(){
        axios.get(`http://localhost:3000/cacamba/`).then(
            res => {
                this.setState({lista: res.data})
            }
        )
    }

    remover(cacamba){
        axios.delete(`http://localhost:3000/cacamba/${cacamba._id}`)
        .then( res => {this.busca()})
    }
    atualizar(id){
        window.location.href= `/cacamba/${id}`
    }

    disponivel(cacamba){
        axios.put(`http://localhost:3000/cacamba/${cacamba._id}`
        ,{...cacamba, status : true}).then(resp => this.busca());//atualiza a lista 
    }
    indisponivel(cacamba){
        axios.put(`http://localhost:3000/cacamba/${cacamba._id}`,
        {...cacamba, status : false}).then(resp => this.busca());//atualiza a lista 
    }
    criaLinhasTabela(){

        return (
           
            this.state.lista.map( cacamba => (
                <tr>
                    <td>{cacamba.codCacamba}</td>
                    <td>{cacamba.valor}</td>
                    <td>{cacamba.residuo}</td>
                    <td>{cacamba.tamanho}</td>
                    <td> <button type="button" className="btn btn-danger"onClick= {e => this.remover(cacamba)}> Remover</button>
                     <button  type="button" className="btn btn-primary" onClick ={e => this.atualizar(cacamba._id)}>Atualizar</button>
                     <button  style={cacamba.status ? {display: "none"} : null} onClick ={ e => this.disponivel(cacamba)} type = "button" className = "btn btn-success"> Disponivel </button>
                     <button style={!cacamba.status ? {display: "none"} : null}onClick ={ e => this.indisponivel(cacamba)} type = "button" className = "btn btn-warning"> indisponivel </button>
                     </td>
              
                </tr>
            ))
        )
    }
    render(){
        return(
           
            <div className ="container">
            Lista de Cacamba 
            <table className = "table">
                <thead>
                    <tr>
                        <th>Codigo Cacamba</th>
                        <th>Valor</th>
                        <th> Residuo</th>
                        <th>Tamanho </th>
                    </tr>
                </thead>
                <tbody>
                    {this.criaLinhasTabela()}
                </tbody>
            </table>
            <a href="/cacamba"><button type="button" className="btn btn-dark">voltar</button></a>
        </div>

        )
    }
}
    
