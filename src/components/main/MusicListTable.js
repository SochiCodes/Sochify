import React,{useState} from 'react'
import {MusicList} from './MusicList'


export default function MusicListTable() {
  const [music] = useState(MusicList)
  return (
    <>
      {
        music.map((music,index) => (
          <tr key={index} className="tbody">
            <td>{music.no}</td>
            <td>{music.title}</td>
            <td>{music.artist}</td>
            <td>{music.time}</td>
            <td>{music.album}</td>
          </tr>
        ))
      }
    </>
  )
}
