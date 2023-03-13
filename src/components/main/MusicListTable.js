import React,{useState,useEffect} from 'react'
// import {MusicList} from './MusicList'
import { useLocation } from 'react-router-dom'


export default function MusicListTable() {
  const [music, setMusic] = useState(null)

  const location = useLocation();
  useEffect(() => {
    if(location.state){
      // apiClient.get("playlists/" + location.state?.id + " /tracks")
      // .then(reponse => console.log(reponse.data))
    }
  },[location.state])
  return (
    <>
      {
        music?.map((music,index) => (
          <tbody key={index} className="tbody">
            <tr>
              <td>{music.id}</td>
              <td>{music.title}</td>
              <td>{music.name}</td>
              <td>{music.time}</td>
              <td>{music.album}</td>
            </tr>
          </tbody>
        ))
      }
    </>
  )
}
