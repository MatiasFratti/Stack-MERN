import React,{Component} from 'react';
// import './styles/nav.css';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"><img id="logo" src="/images/logo_tareas.png"/></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a className="inicio" href="sass.html">Inicio</a></li>
                            {/* <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Nav;