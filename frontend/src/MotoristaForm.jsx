
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
    }
   
    setNome(e){
        this.setState({
         nome:e.target.value
    })
}
    setCpf(e){
        this.setState({
         cpf:e.target.value
    })
}
    setCnh(e){
        this.setState({
         cnh:e.target.value
    })
}
setEmail(e){
    this.setState({
        email:e.target.value
   })
}
setDt_validade(e){
    this.setState({
        dtValidadeCnh:e.target.value
})
}
setDt_nascimento(e){
    this.setState({
        dtNascimento:e.target.value
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
setNumeroCasa(e){
    this.setState({
     numeroCasa:e.target.value
 })
}
setCep(e){
    this.setState({
     cep:e.target.value
 })
}
   

    cadastrar(){

        const newTask = {
            nome : this.state.nome,
            cpf : this.state.cpf,
            cnh : this.state.cnh,
            dtValidadeCnh : this.state.dtValidadeCnh,
            dtNascimento : this.state.dtNascimento,
            email : this.state.email,
            rua : this.state.rua,
            bairro : this.state.bairro,
            numeroCasa : this.state.numeroCasa,
            cep : this.state.cep
            
        } 
        axios.post(
         
            'http://localhost:3000/motorista/',newTask
        ).then(resposta => console.log(`Funcionou ${resposta.data}`))           
    }

    
    render(){
        return(
    
            <div className = "form">
            <div className ="form-group">
                <label htmlFor="nome">Nome </label>
                <input className="form-control" type="text" id="nome" value = {this.state.nome} onChange ={ e => this.setNome(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="cpf">CPF </label>
                <input className="form-control" type="text" id="cpf" value = {this.state.cpf} onChange ={ e => this.setCpf(e)}/>

            </div>
            <div className ="form-group">
                <label htmlFor="cnh">CNH </label>
                <input className="form-control" type="text" id="cnh" value = {this.state.cnh} onChange ={ e => this.setCnh(e)}/>

         
         <div className ="form-group">
                <label htmlFor="dt_nascimento">Data Nacimento </label>
                <input className="form-control" type="text" id="dt_nascimento" value = {this.state.dtNascimento} onChange ={ e => this.setDt_nascimento(e)}/>

         </div>
         <div className ="form-group">
                <label htmlFor="dt_validade_cnh">Vencimento CNH </label>
                <input className="form-control" type="text" id="dt_validade_cnh" value = {this.state.dtValidadeCnh} onChange ={ e => this.setDt_validade(e)}/>

         </div>
         <div className ="form-group">
                <label htmlFor="email">Email  </label>
                <input className="form-control" type="text" id="email" value = {this.state.email} onChange ={ e => this.setEmail(e)}/>

         </div>
         <div className ="form-group">
                <label htmlFor="rua"> Rua </label>
                <input className="form-control" type="text" id="rua" value = {this.state.rua} onChange ={ e => this.setRua(e)}/>
         </div>
         <div className ="form-group">
                <label htmlFor="bairro"> Bairro </label>
                <input className="form-control" type="text" id="bairro" value = {this.state.bairro} onChange ={ e => this.setBairro(e)}/>
         </div>
         <div className ="form-group">
                <label htmlFor="numeroCasa"> Numero da casa </label>
                <input className="form-control" type="text" id="numeroCasa" value = {this.state.numeroCasa} onChange ={ e => this.setNumeroCasa(e)}/>
         </div>
            
            <div className ="form-group">
                <label htmlFor="cep"> Cep </label>
                <input className="form-control" type="text" id="cep" value = {this.state.cep} onChange ={ e => this.setCep(e)}/>
         </div>
         <div className = "from-group">
                <button className = "btn-btn-primary" type = "button" onClick ={e =>this.cadastrar()}> Cadastra </button>
            </div>
             <a href="/buscaMotorista"> <button>Buscar</button></a>
            </div>
            </div>
          
        )
    }
}
