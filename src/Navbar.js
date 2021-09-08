import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink  exact to='/' className="navbar-brand">
                        <img src='./img/logo.png' alt='logo_img' />
                    </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/given">Given</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <NavLink to = '/about'> 
                            <button className="nav_btn" type="submit">get started</button>
                            </NavLink>
                        </form>
                   </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;