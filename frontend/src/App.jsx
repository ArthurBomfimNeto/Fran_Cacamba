import React from 'react'
import {Component} from 'react'
import Routes from'./main/Routes'
import Menu from './template/Menu'

export default class App extends Component{

    render(){
        return(
            <div className="container">{/*class containeré uma classe bootstrap*/}
                <Menu/>
                <Routes/> {/* estamos criando uam simple page aplication - SPA*/}
                
            </div>
        )
    }
}