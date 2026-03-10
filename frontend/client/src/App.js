import logo from './logo.svg';
import "./App.css"
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/screens/home'
import Login from './component/screens/Login'
import Signup from './component/screens/Signup'
import Profile from './component/screens/profile'
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
