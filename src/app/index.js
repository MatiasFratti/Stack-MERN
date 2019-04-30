import React,{Component} from 'react';
import {render} from 'react-dom';
import Nav from './componentes/Nav';
import Task from './componentes/Task';
import Login from './componentes/Login';


class App extends Component{
    constructor(){
        super();
        this.state={
            _state:''
        }
    }
    
    render(){
        return(
            <div>
                <Nav />
                <div className="task">
                    
                    <Task />
                </div>
                
                <div className="login">
                    <Login />   
                </div>
                
            </div>
            
        );
    }
}

render(<App />,document.getElementById('root'));