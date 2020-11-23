import React,{Component} from 'react'
import axios from 'axios'

export default class MotoristaForm extends Component{
    constructor(){
        super()
        this.state = {
            nome :'',
            cpf :'',
            cnh :'',
            dtNascimento :'',
            dtValidadeCnh :'',
            email: "",
            rua : "",
            bairro : "",
            numeroCasa : "",
            cep : "",
            lista:[]
        }
   
       this.busca()
    }

    busca(){
        axios.get(`http://localhost:3000/motorista/`).then(
            
            resp => {
                this.setState({lista: resp.data})
            } 
        )
    }

    remover(motorista){
        axios.delete(`http://localhost:3000/motorista/${motorista._id}`).then(resp => this.busca()); 
    }
  
    criaLinhasTabela(){ 
      
        return(
         
            this.state.lista.map( motorista => (
                <tr key = {motorista._id}>
                    <td>{motorista.nome}</td>
                    <td>{motorista.cpf}</td>
                    <td>{motorista.cnh}</td>
                    <td>{motorista.email}</td>
                    <td>{motorista.rua}</td>
                    <td>{motorista.bairro}</td>
                    <td>{motorista.cep}</td>
                    <td> 
    <button  onClick={ e => this.remover(motorista)} type="button" className="btn btn-danger"> Remover </button>
    <button  type="button" className="btn btn-primary" onClick ={e => this.atualizar(motorista._id)}>Atualizar</button>
                  </td>
                   </tr>
            ))
        )
    }
    render(){
        return(
            <div className ="container">
                Lista de Motorista 
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th> CPF</th>
                            <th>CNH </th>
                            <th>Email </th>
                            <th>Rua </th>
                            <th>bairro </th>
                            <th>Cep </th>

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