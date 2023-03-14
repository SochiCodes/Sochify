import React,{useEffect,useState} from 'react'
import { useLocation} from 'react-router-dom'
import apiClient from '../../spotify';
import './index.css'
//components
import Main from '../../components/main'
import Left from '../../components/left'

export default function Player() {
const location = useLocation();
const [track, setTracks] = useState([])
const [current, setCurrentTrack] = useState({})
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() => {
  if(location.state){
    apiClient.get('playlists/' + location.state?.id + '/tracks')
    .then(res => {
      setTracks(res.data.items)
      setCurrentTrack(res.data.items[0].track)
    })
  }
}, [location.state])
//  console.log(track)
//  console.log(current)
// console.log(current.album)
  return (
    <div className="screen-container player">
      <Main/>
      <Left album={current.album}/>
    </div>
  )
}
