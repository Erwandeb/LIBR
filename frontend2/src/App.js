import { useEffect, useState } from 'react';
import './App.css';
import Routing from './routes/Route';
import { UidContext } from './services/appContext';
import axios from 'axios';
import React from 'react';
//const token = request.COOKIES.get('jwt')
const token = sessionStorage.getItem("jwt");
//console.log(token)

function App() {

 
  const [uid, setUid] = useState();

  useEffect( ()=>{
    const fetchToken = async () => {
      axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials:true,
      })
      .then((res) =>{
        console.log(res.data.user);
        console.log("bonjour");
        setUid( res.data.user);
      })
      .catch(err => console.log(err, "no token from front"));
    };
    fetchToken();
    //if(uid)dispatch(getUser())
  },[uid]);
  
  console.log("uid", uid)

  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <Routing />
      </UidContext.Provider>
    </div>
  );
}

export default App;
