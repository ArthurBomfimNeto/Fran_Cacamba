import React from 'react'
// rotas
import {Router,Route,Redirect,Switch}from 'react-router-dom'

import About from '../About'

import {createBrowserHistory} from "history";
import Cacamba from '../Cacamba';


const history = createBrowserHistory();

// componenete de função 
// eslint-disable-next-line import/no-anonymous-default-export
export default props => (

    <Router history={history}>
       
        <Switch>
            <Route path="/cacamba" component={Cacamba} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/tarefas" />
        </Switch>


    </Router>
)