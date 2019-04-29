import React,{Component} from 'react';

class Task extends Component{
    
    constructor(){
        super();
        
        this.state = {
            title:'',
            description:'',
            task:[],
            _id:''
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
    componentDidMount(){
        this.fetchTask();

    }
    componentDidUpdate(){
        if(this.state._id!=''){
            
            document.getElementById("boton").innerHTML='Actualizar <i class="material-icons right">send</i>';
           setTimeout(function(){
            if(this.state.title && this.state.description){
                this.setState({_id:''})
                }
           },400); 
               
            
        }
        else{
            
            document.getElementById("boton").innerHTML='Agregar <i class="material-icons right">send</i>';
        }
    }
    fetchTask(){
        fetch('/api/tasks')
        .then(res=>res.json())
        .then(data=>{
            this.setState({task:data});
            console.log(this.state.task);
            

        })
        .catch(err=>alert(err));
    }
    addTask(e){
        if(this.state._id!=''){
            fetch('/api/tasks/'+this.state._id,{
                method:'PUT',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html:'Datos actualizados'});
                this.setState({title:'', description:'',_id:''});
                this.fetchTask();
                console.log(data)})
            .catch(err => alert(err));
        
        }
        else{
            
            fetch('/api/tasks',{
                method:'POST',
                body: JSON.stringify({title:this.state.title,description:this.state.description}),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>{res.json()                  
                M.toast({html:'Datos guardados'});
                this.setState({title:'', description:''});
                this.fetchTask();
             })
                    
            
            .catch(err=>alert(err));
        }
        e.preventDefault();
        console.log(this.state);
    }
     deleteTask(id){
        var borrar = confirm('¿Deseas eliminar este dato?');
        if(borrar){
            fetch('/api/tasks/'+id,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html:'Dato eliminado'});
            })
            .catch(err => alert(err));
            this.fetchTask();
        }     
    }

    editTask(id){
        fetch('/api/tasks/'+id,{

        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                _id: id
            });
        })
        .catch(err => alert(err));

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name='title'onChange={this.handelChange} type="text" placeholder="Tíltuo" value={this.state.title}/>                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea name="description" onChange={this.handelChange} placeholder="Tarea a realizar" className="materialize-textarea"  value={this.state.description}>
                                            </textarea>    
                                        </div>
                                    </div>
                                    <button id="boton" className="btn waves-effect waves-light red" type="submit" name="action">
                                     
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s8">
                        <table>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Descropcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.task.map((task,i)=>{
                                        return(
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button className="btn waves-effect waves-light red" onClick={()=>this.editTask(task._id)}>
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </td>
                                                <td>
                                                <button className="btn waves-effect waves-light red" onClick={() =>this.deleteTask(task._id)} >
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Task;