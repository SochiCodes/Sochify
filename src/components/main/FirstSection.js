import React from 'react'
import Banner from './Banner'
import PlayList from './PlayList'
import AudioPlayer from './AudioPlayer'

import '../../styles/maincss/FirstSection.css'

export default function FirstSection() {
  return (
    <section className="firstSection">
      <Banner/>
      <PlayList/>
      <AudioPlayer/>
    </section>
  )
}
