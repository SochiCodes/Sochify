import React from 'react'
import '../../styles/maincss/Banner.css'

import {MdOutlineArrowForwardIos} from 'react-icons/md'

export default function Banner() {
  return (
    <section className='bannerSection'>
        <header>
            <p>What's Hot</p>
            <div className="headerTitle">
                <h2>Trending</h2>
                <div className='more'>
                    <p>More</p>
                    <MdOutlineArrowForwardIos/>
                </div>
            </div>
        </header>
        <div className="bannerContainer">
            <div>
                <p className='artist'>Artist</p>
                <h1>On Top <br/> Of The World</h1>
            </div>
            <div className='bannerFooter'>
                <div>
                    <button className='play btn'>Play</button>
                    <button className='follow btn'>Follow</button>
                </div>
                <div>
                    <p className='listners'>Monthly Listeners</p>
                    <p className='listerNo'>32.092</p>
                </div>
            </div>
        </div>
    </section>
  )
}
