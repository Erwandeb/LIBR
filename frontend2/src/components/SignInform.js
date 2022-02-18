import React, {useState} from 'react';
import axios from 'axios';


const SignInform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const  handleLogin = (e) =>{
        e.preventDefault();

       const identificationError = document.getElementById("identification-error");

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials:true,
            data: {
                email:email,
                password:password,
            },
        })
        .then((res)=>{
            if(res.data.errors){
                console.log("error", res.data.errors)
            } else{
                console.log(res.data.user)
                //localStorage.setItem("token", res.data.user);
                //sessionStorage.setItem("")
                // console.log("requete complete")
                window.location='/Main';
            }
        })
        .catch((err) => {
            identificationError.innerHTML = "Vos identifiants sont incorrects !";
            console.log("hello error", err);
        })
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
                        maxLength="50"
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