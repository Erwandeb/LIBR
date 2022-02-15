import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import{BrowserRouter , Routes, Route} from "react-router-dom"
import Authentification from './pages/Authentification';
import SignInform from './components/SignInform';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />

        <Route path="/Authentification"  element={<Authentification/>} >
          <Route path="/Authentification/signin"  element={<SignInform/>} />
          <Route path="/Authentification/signup"  element={<SignUpForm/>} />
        </Route>

        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
