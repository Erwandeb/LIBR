import React from 'react';
import logo from "../../src/public/medias/logo.png";
import Home from '../pages/Home';
import Authentification from '../pages/Authentification';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <NavLink to="/">
                    <img src={logo} alt="Logo de libr"/>
                </NavLink>
            </div>
            <div className='button-ath-and-co'>
                <NavLink to="/Authentification/signin">
                    Se connecter
                </NavLink>
                <NavLink to="/Authentification/signup">
                    S'inscrire
                </NavLink>
            </div>
        </div>
    );
};

export default Header;