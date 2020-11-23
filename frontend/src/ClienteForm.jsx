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
      
    }
    
    setnome(e){
        this.setState({
         nome:e.target.value
    })
}
    setcpf(e){
        this.setState({
            cpf : e.target.value    
        })  
    }
    setnumeroCasa(e){
        this.setState({
            numeroCasa:e.target.value
    })
}
setdata_nascimento(e){
        this.setState({
            dtNascimento:e.target.value
    })
    }
    setcep(e){
        this.setState({
         cep:e.target.value
    })
}

setEmail(e){
    this.setState({
     email:e.target.value
})
}
setRua(e){
    this.setState({
     rua:e.target.value
})
}
setBairro(e){
    this.setState({
     bairro:e.target.value
})
}

    cadastrar(){

        const newTask = {
            nome : this.state.nome,
            cpf: this.state.cpf,
            dtNascimento : this.state.dtNascimento,
            email : this.state.email,
            rua : this.state.rua,
            bairro : this.state.bairro,
            numeroCasa: this.state.numeroCasa,
            cep : this.state.cep
        }

        
        axios.post(
            `http://localhost:3000/cliente/`,newTask
        ).then(resposta => console.log(`Funcionou ${resposta.data}`))  
    }


    render(){
        return(
            <div className = "container">
           
            <div className = "form">
            <div className ="form-group">
                <label htmlFor="nome">nome </label>
                <input className="form-control" type="text" id="nome" value = {this.state.nome} onChange ={ e => this.setnome(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="cpf">cpf </label>
                <input className="form-control" type="text" id="cpf" value = {this.state.cpf} onChange ={ e => this.setcpf(e)}/>

            </div>
            
            <div className ="form-group">
                <label htmlFor="data_nascimento">Data Nascimento </label>
                <input className="form-control" type="text" id="data_nascimento" value = {this.state.dtNascimento} onChange ={ e => this.setdata_nascimento(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="email">Email </label>
                <input className="form-control" type="text" id="email" value = {this.state.email} onChange ={ e => this.setEmail(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="rua">Rua </label>
                <input className="form-control" type="text" id="rua" value = {this.state.rua} onChange ={ e => this.setRua(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="bairro">Bairro </label>
                <input className="form-control" type="text" id="bairro" value = {this.state.bairro} onChange ={ e => this.setBairro(e)}/>

            </div>

            <div className ="form-group">
                <label htmlFor="numeroCasa">Numero da Casa </label>
                <input className="form-control" type="text" id="numeroCasa" 
                value = {this.state.numeroCasa} onChange ={ e => this.setnumeroCasa(e)}/>

            </div>

          
            <div className ="form-group">
                <label htmlFor="cep">cep </label>
                <input className="form-control" type="text" id="cep" value = {this.state.cep} onChange ={ e => this.setcep(e)}/>


            <div className = "from-group">
                <button className = "btn-btn-primary" type = "button" onClick ={e =>this.cadastrar()}> Cadastra </button>
            </div>
            </div>
      
                 <a href="/buscaCliente"> <button>Buscar</button></a>
            
            </div>
            </div>
        )
    }
}
