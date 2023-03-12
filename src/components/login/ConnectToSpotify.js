import React from 'react'
import { loginEndPoint } from '../../spotify'

import './../../styles/loginpagecss/ConnectToSpotify.css'

export default function ConnectToSpotify() {
  return (
    <div className='connect-2-spotify'>
        <img src="/img/logo.png" alt="" />
        <a href={loginEndPoint} className="login"> Login With Spotify</a>
    </div>
  )
}
