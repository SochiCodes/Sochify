import React,{useState} from 'react'
import { ShortCutItems } from './ShortCutItems'
import FavArtists from './FavArtists'
import './../../../styles/homepagecss/leftcss/Left.css'

import {CgAddR} from 'react-icons/cg'

export default function SecondSection() {
  const [items] = useState(ShortCutItems)
  
  return (
    <section className="left">
      <div className='shortcut-wrapper'>
        <h1 className='sct-title'>Shortcuts</h1>
        <div className="buttons-sct">
          {
            items.map((items,index) => (
              <div key={items.id}>
                <img src={items.imgSrc} alt="#" />
                <span>{items.text}</span> 
              </div>
            ))
          }
        </div>
      </div>
      <FavArtists/>
      <section className='artist-card'>
        <div className="album-img-container">
            <img src="/img/albumCover.jpg" alt="album cover" />
        </div>
        <footer className='footer'>
          <div>
            <h4>Perception</h4>
            <p>NF - Nathan</p>
          </div>
          <CgAddR className='add-album-icon'/>
        </footer>
      </section>
    </section>
  )
}

