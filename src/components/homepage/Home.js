import React from 'react'

import SideBar from './sideBar/SideBar'
import Main from './main/Main'
import Left from './left/Left'

export default function Home() {
   

  return (
    <div className="container">
      <SideBar/>
      <Main/>
      <Left/>
    </div>
  )
}
 