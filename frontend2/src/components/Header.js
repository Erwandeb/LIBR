import React, { useContext } from 'react';
import logo from "../../src/public/medias/logo.png";
import Home from '../pages/Home';
import Authentification from '../pages/Authentification';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../services/appContext';


// Ajouter Uid
const Header = () => {

    const uid = useContext(UidContext);
    console.log(uid)
   
    return (
    <div className='header'>
        {
            uid ? 
            (
                <>
                    <div className='logo'>
                        <NavLink to="/">
                            <img src={logo} alt="Logo de libr"/>
                        </NavLink>
                    </div>
                    <div className='button-ath-and-co'>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                </>
            ):(
                <>
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
                </>
            )

        }
       </div>
    );
};

export default Header;