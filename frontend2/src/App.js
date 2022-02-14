import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import{BrowserRouter , Routes, Route} from "react-router-dom"
import Authentification from './pages/Authentification';
import Signin from "./components/SignIn"
import Signup from './components/SignUp';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />

        <Route path="/Authentification"  element={<Authentification/>} >
          <Route path="/Authentification/signin"  element={<Signin/>} />
          <Route path="/Authentification/signup"  element={<Signup/>} />
        </Route>

        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
