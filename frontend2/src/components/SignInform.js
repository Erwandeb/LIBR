import React, {useState} from 'react';





const SignInform = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const  handleLogin =(e)=>{
        e.preventDefault();
    }



    return (
        <div className='signin-form'>
            <h2>Connectez vous :</h2>
              <form action="" onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="pseudo">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
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

export default SignInform;