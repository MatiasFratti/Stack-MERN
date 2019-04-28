import React,{Component} from 'react';

class Task extends Component{

    constructor(){
        super();
        this.state = {
            title:'',
            description:''
        }
        this.handelChange = this.handelChange.bind(this);
        this.addTask = this.addTask.bind(this);
        
    }
    handelChange(e){
        const {name,value} = e.target;
        console.log(name,' ',value);
        this.setState({
           [name]: value
        });
    }

    addTask(e){
        fetch('/api/tasks',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then((res)=>console.log(res))
        
        .catch(err=>alert(err));
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name='title'onChange={this.handelChange} type="text" placeholder="Tíltuo" />                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea name="description" onChange={this.handelChange} placeholder="Tarea a realizar" className="materialize-textarea">
                                            </textarea>    
                                        </div>
                                    </div>
                                    <button className="btn waves-effect waves-light red" type="submit" name="action">Agregar
                                     <i className="material-icons right">send</i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Task;