import React, {useState} from 'react';

const SignUpForm = () => {

    const [pseudo, setPseudo] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const  handleLogin = (e)=>{
        e.preventDefault();
    }

    return (
        <div className='signup-form'>
        <h2>Inscription:</h2>
          <form action="" onSubmit={handleLogin}>
            <div className="input-wrapper">
                <label htmlFor="pseudo">Pseudo</label>
                <input 
                    type="text" 
                    id="pseudo"
                    onChange={(e)=>setPseudo(e.target.value)}
                    value={pseudo}
                    minLength="2"
                    maxLength="15"
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="nom">Nom</label >
                    <input 
                        type="text" 
                        id="nom"
                        onChange={(e)=>setNom(e.target.value)}
                        value={nom}
                        minLength="2"
                        maxLength="15"
                    />
            </div>
            <div className="input-wrapper">
                <label htmlFor="prenom">Prénom</label >
                    <input 
                        type="prenom" 
                        id="prenom"
                        onChange={(e)=>setPrenom(e.target.value)}
                        value={prenom}
                        minLength="2"
                        maxLength="15"
                    />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">E-mail</label >
                    <input 
                        type="email" 
                        id="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        minLength="2"
                        maxLength="15"
                    />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label >
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        minLength="2"
                        maxLength="15"
                    />
            </div>
    
            <div id="identification-error"></div>
            <button type="submit" className="sign-in-button">Sign in</button>
        </form>
    </div>
    );
};

export default SignUpForm;