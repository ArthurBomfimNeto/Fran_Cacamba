import React, { Component } from 'react'
import axios from  'axios'

export default class UserForm extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        } 
    }

    setUser(e){
        this.setState({
            username: e.target.value
        })
    }
    setPassword(e){
        this.setState({
            password: e.target.value
        })
    }
    
    salvar(){
        
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        console.log('testando')
        axios.post(`http://localhost:3000/user/`,newUser
        ).then(
            resposta => console.log(resposta.data))
    }
    render() {
        return (
            
            <div>
                <div>
                    <label htmlFor="user"> User</label>
                    <input type="text" id="user" value={this.state.username} onChange= {e => this.setUser(e)}/>
                </div>

                <div>
                    <label htmlFor="password"> Password</label>
                    <input type="text" id="password" value={this.state.password} onChange= {e => this.setPassword(e)}/>
                </div>
                <div>
                    <button type="button" onClick = {e => this.salvar()}>Salvar</button>
                </div> <br/>
            </div>

        )
    }


}