import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import apiClient from '../../spotify'
//css
import './Library.css'
// Icons
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'




export default function MusicLibrary() {
  const [playlists, setPlaylists] = useState(null)
  // const [playlistsImg, setPlaylistsImg] = useState(null)
 
  useEffect(() => {
    apiClient.get("me/playlists").then(response => {
      setPlaylists(response.data.items)
      // console.log(response.data.items[0].images[0].url)
    })
  },[])
  //gets image directly
  // useEffect(() => {
  //   apiClient.get("me/playlists").then(response => {
  //     setPlaylistsImg(response.data.items[0].images[0].url)
  //     // console.log(response.data.items[0].images[0].url)
  //   })
  // },[])

const navigate = useNavigate()

const playPlaylist = (id) =>{
  navigate(`/player/${id}`)
}
  return (
    <div className='screen-container library-body'>
        {playlists?.map((playlist) =>
              <div 
                className="playlist-card" 
                key={playlist.id} 
                onClick = {() => playPlaylist(playlist.id)}
              >
                <img src={(playlist?.images ? playlist?.images[0]?.url : '/img/defaultAlbumCover.jpg')} alt="Playlist-art" className='playlist-image'/>
                <p className='playlist-title'>{playlist?.name}</p>
                <p className='playlist-subtitle'>{playlist?.tracks?.total} songs</p>
                <div className='playlist-fade'>
                  <IconContext.Provider value={{size: "50px", color: "orange"}}>
                    <AiFillPlayCircle/>
                  </IconContext.Provider>
                </div>
              </div>
          )}
    </div>
  )
}

