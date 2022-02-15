import React from 'react';
import Header from '../components/Header';
import { NavLink, Outlet } from 'react-router-dom';


const Authentification = () => {
    return (
        <div className='authentification'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Authentification;