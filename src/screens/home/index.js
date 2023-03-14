import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { setClientToken } from '../../spotify'
//Pages
import Favorites from '../favorites/Favorites'
import Feed from '../feed/Feed'
import Library from '../library'
import Player from '../player/index'
import Trending from '../trends/Trends'
import Album from '../album/Album'
import Artist from '../artist/Artist'
import Calendar from '../calendar/Calendar'
import Events from '../events/Events'
import New from '../new/New'
import Login from '../login/Login'
//css
import './home.css'
//components
import SideBar from '../../components/sidebar'


export default function Home() {
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
  
  return ( !token?
    <Login/>:
    <Router>
      <div className="main-body">
        {/* <Login/> */}
        <SideBar/>
        <Routes>
          <Route path="/" element={<Library/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/trends" element={<Trending/>}/>
          <Route path="/player" element={<Player/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/album" element={<Album/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/release-calendar" element={<Calendar/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/new-and-notable" element={<New/>}/>
        </Routes>
      </div>
    </Router>
  )
}
