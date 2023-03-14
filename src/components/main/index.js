import React from 'react'
import './index.css'

import Header from './Header'
import Banner from './Banner'
import PlayList from './PlayList'
import AudioPlayer from './AudioPlayer'


export default function Main() {
  return (
    <section className="main">
      <Header/>
      <Banner/>
      <PlayList/>
      <AudioPlayer/>
    </section>
  )
}
