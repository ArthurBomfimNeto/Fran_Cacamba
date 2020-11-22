import React, {Component} from 'react'

export default class Menu extends Component {



    render(){
        return(
            <nav className="navbar navbar-inverse" >
                <div className="container">
                    <div className="navbar-header">
                        <a className="nav-bar-brand" href="#">
                            <i className= "fa-fa-calendar-check-o"></i> FrancaCacamba  
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li> <a href="/cacamba"> Cacamba</a></li>
                            <li> <a href="/about"> Sobre </a></li>
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }   
}