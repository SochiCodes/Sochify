import React,{useState, useEffect} from 'react'
import apiClient from '../../spotify'
//Icon imports
import {SlArrowRight} from 'react-icons/sl'
import {RiMenuFoldLine,RiHeart2Line} from 'react-icons/ri'
import {BiCalendarEvent,BiAlbum} from 'react-icons/bi'
import {BsClipboardPulse} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {
  MdHomeFilled, 
  MdOutlineExplore, 
  MdOutlineDashboardCustomize,
} from 'react-icons/md'

import SidebarButton from './SidebarButton'
import './sidebar.css'



export default function SideBar() {

  const [userAvatar, setUserAvatar] = useState("/img/profile.png")

  useEffect(() => {
    apiClient.get("me").then(response => {
      setUserAvatar(response.data.images[0].url)
    })
  },[])


  return (
    <aside>
      {/* Header */}
      <header>
        <img src="/img/logo.png" alt="logo" width={130} />
        <RiMenuFoldLine className="collapseIcon"/>
      </header>
      {/* Button navigation */}
      <div className='navmenu-container'>
        <div className='nav menu-1'>
          <div className="icon-wrapper">
            <SidebarButton title="Player" to="/player" icon={<MdHomeFilled className='icon'/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Trends" to="/trends" icon={<BsClipboardPulse/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Feed" to="/Feed" icon={<MdOutlineExplore/>}/>
          </div>
        </div>

        {/* Your Collection */}
        <div className='nav menu-3'>
          <p className='menu-title'>Your Collection</p>
          <div className="icon-wrapper">
            <SidebarButton title="Albums" to="/" icon={<BiAlbum/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Favorite Songs" to="/favorites" icon={<RiHeart2Line/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Artist" to="/artist" icon={<IoIosPeople/>}/>
          </div>
        </div>

        {/* Discover Section*/}
        <div className='nav menu-2'>
          <p className="menu-title">Discover</p>
          <div className="icon-wrapper">
            <SidebarButton title="New and Notable" to="/new-and-notable" icon={<MdOutlineDashboardCustomize/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Release Calendar" to="/release-calendar" icon={<BiCalendarEvent/>}/>
          </div>
          <div className="icon-wrapper">
            <SidebarButton title="Events" to="/events" icon={<MdHomeFilled/>}/>
          </div>
        </div>
        
      </div>
      <section className="user-profile">
        <div className='user'>
          <img src={userAvatar} alt="orofile" />
          <h5>Onah Sochima</h5>
        </div>
        <SlArrowRight className="profile-arrow"/>
      </section>
    </aside>
  )
}
