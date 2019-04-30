import React,{Component} from 'react';


class Login extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            pass:'',
            _state:null
        }
        this.handelChange = this.handelChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    getState(){
        fetch('/api/tasks/state')
        .then(res=>res.json())
        .then(data=>{
            this.setState({_state:data});
            console.log(this.state._state);
            

        })
        .catch(err=>alert(err));
    }
    handleEnter(e){
        
        fetch('/api/tasks/validation',{
            method:'POST',
            body: JSON.stringify({name:this.state.name,pass:this.state.pass}),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data!=''){
                M.toast({html:'Acceso correcto'})                
            this.getState();
            } 
            else{
                alert('Error de credenciales');
            }
        })      
        .catch(err=>alert(err))
    
        e.preventDefault();
    }
    handelChange(e){
        const {name,value} = e.target;
        console.log(name,' ',value);
        this.setState({
           [name]: value
        });
    }
    render(){
        return(
                
                <div className="row">
                    <center><h1>Inicia sesión</h1></center>
                    <form className="col s6 offset-s3">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input onChange={this.handelChange} name="name" id="icon_prefix" type="text" className="validate" value={this.state.name}/>
                                <label htmlFor="icon_prefix">Npmbre de usuario</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">lock</i>
                                <input onChange={this.handelChange} name="pass" id="icon_telephone" type="password" className="validate" value={this.state.pass}/>
                                <label htmlFor="icon_telephone">Contraseña</label>
                            </div>
                            <div className="input-field col s6">
                                 
                                <button className="btn waves-effect waves-light red" type="submit" name="action"
                                
                                onClick={this.handleEnter}>Entrar
                                <i className="material-icons right">send</i>
                                
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
        
        );
    }
}
export default Login;