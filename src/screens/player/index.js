import React,{useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import apiClient from '../../spotify';
import './index.css'
//components
import Main from '../../components/main'
import Left from '../../components/left'

export default function Player() {

const {id} = useParams();
console.log({id})

  return (
    <div className="screen-container player">
      <Main/>
      <Left/>
    </div>
  )
}
// useEffect(() => {
//   if(location.state){
//     apiClient.get('playlists/' + location.state?.id + ' /tracks')
//     .then(response => console.log(response.data))
//   }
// }, [location.state])