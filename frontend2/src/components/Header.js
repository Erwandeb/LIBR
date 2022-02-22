import React, { useContext } from 'react';
import logo from "../../src/public/medias/logo.png";
import Home from '../pages/Home';
import Authentification from '../pages/Authentification';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../services/AppContext';
import axios from 'axios';

// Ajouter Uid
const Header = () => {

    const uid = useContext(UidContext);
    console.log("hello", uid)
   
    const handleLogout = (e) =>{
        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials:true,
        })
        .then((res)=>{
            if(res.data.errors){
                console.log("error", res.data.errors)
            } else{
                window.location='/';
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
    <div className='header'>
        {
            uid ? 
            (
                <>
                    <div className='logo'>
                        <NavLink to="./">
                            <img src={logo} alt="Logo de libr"/>
                        </NavLink>
                    </div>
                    <div className='button-ath-and-co'>
                        <NavLink to="/" onClick={handleLogout}>
                           Déconnexion
                        </NavLink>
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