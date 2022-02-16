import { useEffect, useState } from 'react';
import './App.css';
import Routing from './routes/Route';
import { UidContext } from './services/appContext';
import axios from 'axios';

//const token = request.COOKIES.get('jwt')

//const token = sessionStorage.getItem("jwt");
function App() {

  const [uid, setUid] = useState(null);

  useEffect( ()=>{
    const fetchToken = () => {
      axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials:true,
      })
      .then((res) => {console.log(res)})
      .catch(err => console.log(err, "no token from front"));
    }
    fetchToken();
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
