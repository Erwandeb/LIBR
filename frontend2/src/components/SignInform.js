import React, {useState} from 'react';
import axios from 'axios';


const SignInform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const  handleLogin = (e) =>{
        e.preventDefault();

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            data: {
                email:email,
                password:password,
            },
        })
        .then((res)=>{
            localStorage.setItem("token", res.data.body.token);
            window.location='/Main';
        })
        .catch((err) => {
            //identificationError.innerHTML = "Vos identifiants sont incorrects !";
            console.log(err.data);
        })
    
        //window.location='/Main';
    };

    return (
        <div className='signin-form'>
            <h2>Connectez vous :</h2>
              <form action="" onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
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

export default SignInform;