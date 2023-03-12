import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { getTokenFromUrl } from './spotify'

import './App.css'
import Home from './components/homepage/Home';
import ConnectToSpotify from './components/login/ConnectToSpotify'
import { setClientToken } from './spotify';



function App() {
  const [token, setToken] = useState("")

  useEffect(()=>{
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash; 
      
      window.localStorage.hash = "";

      if(!token && hash){
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token)
        setToken(_token)
        setClientToken(_token)
      }else{
        setToken(token)
        setClientToken(token)
      }
      
  },[])
  
  return (
    !token ? <ConnectToSpotify/>
    :
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
