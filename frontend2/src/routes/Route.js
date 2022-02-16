import{BrowserRouter , Routes, Route, Router} from "react-router-dom"
import Notfound from '../pages/Notfound';
import SignInform from '../components/SignInform';
import SignUpForm from '../components/SignUpForm';
import Authentification from '../pages/Authentification';
import Main from '../pages/Main';
import Home from '../pages/Home';


const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/"  element={<Home/>} />
  
          <Route path="/Authentification"  element={<Authentification/>} >
            <Route path="/Authentification/signin"  element={<SignInform/>} />
            <Route path="/Authentification/signup"  element={<SignUpForm/>} />
          </Route>
  
          <Route path="/Main"  element={<Main/>} />
  
          <Route path="*" element={<Notfound/>} />
  
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Routing;
