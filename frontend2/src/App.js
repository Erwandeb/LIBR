import { useEffect, useState } from 'react';
import './App.css';
import Routing from './routes/Route';
import axios from 'axios';
import React from 'react';
import {UidContext} from './services/AppContext';
import {useDispatch } from 'react-redux';
import {getUser} from './actions/user.actions';

function App() {

  
  // Cecking uid if user reconnect
  const [uid, setUid] = useState();
  const dispatch = useDispatch();
  const useThunkDispatch = () => useDispatch();


  useEffect((dispatch)=>{
    const fetchToken = async () => {
      axios({
          method:"GET",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials:true,
      })
      .then((res) =>{
        console.log("res.data", res.data);
        setUid(res.data);
        window.location('/Main')
      })
      .catch((err) => console.log("no token"));
    };
    fetchToken();

    if(uid){
      dispatch(getUser(uid));
    }
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
