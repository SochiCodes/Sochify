import React,{useState, useEffect} from 'react'
import './../../../styles/homepagecss/sideBarcss/SideBar.css'

//API import----------
import apiClient  from '../../../spotify'

import {MenuItems} from './MenuItems'
//Icon imports
import {SlArrowRight} from 'react-icons/sl'
import {RiMenuFoldLine} from 'react-icons/ri'


export default function SideBar() {
  // const [collapse, setCollapse] = useState(true)
  const [menus] = useState(MenuItems)
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
        <img src={setUserAvatar} alt="logo" width={130} />
        <RiMenuFoldLine className="collapseIcon"/>
      </header>
      {/* Button navigation */}
      <nav>
        {
          menus.map((menus, index) => (
            <ul key={menus.id}>
              <p className='title'>{menus.title}</p>
              <li>
                
                <a href="#" className='menu-item'>
                  <i className='sideBarIcons'>{menus.icon}</i>
                  <span>{menus.name} </span>
                </a>
              </li>
            </ul>
          ))
        }
      </nav>
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
