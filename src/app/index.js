import React,{Component} from 'react';
import {render} from 'react-dom';
import Nav from './componentes/Nav';
import Task from './componentes/Task';


class App extends Component{
    render(){
        return(
            <div>
                <Nav />
                <Task />
            </div>
            
        );
    }
}

render(<App />,document.getElementById('root'));