import React from 'react';
import illustration from "../../src/public/medias/illustration.png";
import Header from '../components/Header';

const Notfound = () => {
    return (
        <div className='not-found'>
            <Header/>
            <div className='notfound-content'>
                <div className='notfound-content-text'>
                    <h1>404 la page n'existe pas</h1>
                </div>
            </div>
        </div>
    );
};

export default Notfound;