import React from 'react'


import './AudioPlayer.css'

import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {GiLoveSong} from 'react-icons/gi'
import {CgArrowsExpandRight} from 'react-icons/cg'
import {AiOutlineFastForward, AiFillFastBackward} from 'react-icons/ai'
import {FiVolume2, FiVolume1} from 'react-icons/fi'
import {
    BsRepeat,
    BsShuffle,
    BsPlayCircleFill
} from 'react-icons/bs'


export default function AudioPlayer() {
    

  return (
    <div className='wrapper-ap'>
        <div className='container-ap'>
            <section className="audioPlayer">
                <div className="songCoverImg">
                    <img src="/img/songCover.jpg" alt="" />
                </div>
                <div className="audioPlayerContainer">
                    <div className='mainControls'>
                        <div className="audioToggles">
                            <span className="love tog icon" ><MdOutlineFavoriteBorder/> </span>
                            <span className="music tog icon"><GiLoveSong/></span>
                            <span className="expand tog icon"><CgArrowsExpandRight/></span>
                        </div>
                        <div className="audioControls">
                            <BsRepeat className="prev icon"/>
                            <AiFillFastBackward className="icon"/>
                            <BsPlayCircleFill className="play icon"/>
                            <AiOutlineFastForward className="next icon"/>
                            <BsShuffle className="icon"/>
                        </div>
                        <div className="volumeControl">
                            <FiVolume1 className="icon"/>
                            <input type="range" />
                            <FiVolume2 className="icon"/>
                        </div>
                    </div>
                    <div className="audioTimer">
                        <span>0:00</span>
                        <input type="range" />
                        <span>3:45</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
