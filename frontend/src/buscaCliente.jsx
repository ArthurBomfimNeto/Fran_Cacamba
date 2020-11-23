import React,{Component} from 'react'
import axios from 'axios'
export default class ClienteForm extends Component{
    constructor(){

        super()
        this.state = {
            nome :'',
            cpf:'',
            dtNascimento:'',
            email:'',
            rua : '',
            bairro : '',
            numeroCasa : '',
            cep : '',
            lista:[]
        }
       this.busca()
    }

    busca(){
        axios.get(`http://localhost:3000/cliente/`).then(
            resp => this.setState({lista: resp.data})
        )
    }
 
    remover(cliente){
        axios.delete(`http://localhost:3000/cliente/${cliente._id}`)
        .then(resp => this.busca()); 
    }
   
    criaLinhasTabela(){ 
       
        return(
           
            this.state.lista.map( cliente => (
          
                <tr key = {cliente._id}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.dtNascimento}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.rua}</td>
                    <td>{cliente.bairro}</td>
                    <td>{cliente.numeroCasa}</td>
                    <td>{cliente.cep}</td>
                    <td> 
    <button  onClick={ e => this.remover(cliente)} type="button" className="btn btn-danger"> Remover </button>
    <button  type="button" className="btn btn-primary" onClick ={e => this.atualizar(cliente._id)}>Atualizar</button>

                  </td>
                   </tr>
            ))
        )
 
    }

    render(){
        return(
            <div className ="container">
            Lista de Clientes 
            <table className = "table">
                <thead>
                    <tr>
                        <th>nome</th>
                        <th> cpf</th>
                        <th>Data nascimento </th>
                        <th>Numero Casa  </th>
                        <th>Email</th>
                        <th>Rua</th>
                        <th>Bairro</th>
                        <th>cep</th>
                    </tr>
                </thead>
                <tbody>
                    {this.criaLinhasTabela()}
                </tbody>
            </table>
        </div>
        )
    }
}