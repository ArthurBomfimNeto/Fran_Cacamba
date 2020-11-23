import React from 'react'
// rotas
import {Router,Route,Redirect,Switch}from 'react-router-dom'


import {createBrowserHistory} from "history";
import Cacamba from '../Cacamba';
import buscaCacamba from '../buscaCacamba'
import Motorista from '../motorista'
import buscaMotorista from '../buscaMotorista'
import Cliente from '../cliente'
import buscaCliente from '../buscaCliente'
import User from '../UserForm'


const history = createBrowserHistory();

// componenete de função 
// eslint-disable-next-line import/no-anonymous-default-export
export default props => (

    <Router history={history}>
       
        <Switch>
            <Route path="/cacamba"  component={Cacamba} />     
            <Route path="/buscaCacamba" component={buscaCacamba} />
            <Route path="/motorista" component={Motorista} />
            <Route path="/buscaMotorista" component={buscaMotorista} />
            <Route path="/cliente" component={Cliente} />
            <Route path="/buscaCliente" component={buscaCliente} />
            <Route path="/user" component={User} />
            <Redirect from="*" to="/about" />
        </Switch>


    </Router>
)