import logo from './logo.svg';
import "./App.css"
import React,{useEffect, createContext,useReducer,useContext} from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Home from './component/screens/home'
import Login from './component/screens/Login'
import Signup from './component/screens/Signup'
import Profile from './component/screens/profile'
import CreatePost from './component/screens/CreatePost'
import {initalState,reducer} from '../src/reducers/useReducer'
export const UserContext=createContext()

const Routing=()=>{
  const navigate=useNavigate();
  const {state,dispatch}=useContext(UserContext);
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user)
    {
       dispatch({type:"USER",payload:user});
      navigate('/');
    }
    else
    {
      navigate('/signin');
    }

  },[])
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  )
}
function App() {
  const [state,dispatch]=useReducer(reducer,initalState);
  return (
    <UserContext.Provider value={{ state,dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
