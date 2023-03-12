import React from 'react'
import Banner from './Banner'
import PlayList from './PlayList'
import AudioPlayer from './AudioPlayer'
import Header from './Header'

import './../../../styles/homepagecss/maincss/Main.css'

export default function FirstSection() {
  return (
    <section className="main">
      <Header/>
      <Banner/>
      <PlayList/>
      <AudioPlayer/>
    </section>
  )
}
