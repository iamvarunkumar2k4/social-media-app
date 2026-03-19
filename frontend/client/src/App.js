import logo from './logo.svg';
import "./App.css"
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/screens/home'
import Login from './component/screens/Login'
import Signup from './component/screens/Signup'
import Profile from './component/screens/profile'
import CreatePost from './component/screens/CreatePost'
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
