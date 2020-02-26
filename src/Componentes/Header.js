import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//Pagina de inicio
import Home from '../Pages/Home';
import Tecnicos from '../Pages/Tecnicos';

class Header extends Component {
    render() {
        
        return (
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Mi proyecto</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Servicios
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/tecnicos">Tecnicos</Link>
                                    <a className="dropdown-item" href="#">Plomeria</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Albañilería</a>
                                </div>
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="container">
                <Route exact path='/' component={Home}/> 
                <Route exact path='/tecnicos' component={Tecnicos}/>
            </div>
            </Router>
        );
    }
}

export default Header;