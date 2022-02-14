import React from 'react';
import illustration from "../../src/public/medias/illustration.png";
import Header from '../components/Header';


const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <div className='hero-content'>
                <div className='home-text-container'>
                    <h1>Bienvenue sur LIBR</h1>
                    <h4>Le reseau social opensource </h4>
                </div>
                <div className='home-illustration'>
                    <img src={illustration} alt="illustration de la home page"/>
                </div>
            </div>
        </div>
    );
};

export default Home;