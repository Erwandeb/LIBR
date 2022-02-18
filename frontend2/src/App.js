import { useEffect, useState } from 'react';
import './App.css';
import Routing from './routes/Route';
import { UidContext } from './services/appContext';
import axios from 'axios';
import React from 'react';


function App() {

  const [uid, setUid] = useState({});

  useEffect( ()=>{
    const fetchToken = async () => {
      axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials:true,
      })
      .then((res) =>{
        //console.log(res.data.user);
        console.log(res.data);
        setUid(res.data);
      })
      .catch((err) => console.log("no token from front"));
    };
    fetchToken();
    //console.log(uid)
    //if(uid)dispatch(getUser())
  },[uid]);
  


  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <Routing />
      </UidContext.Provider>
    </div>
  );
}

export default App;
