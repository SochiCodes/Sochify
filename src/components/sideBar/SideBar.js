import React,{useState} from 'react'
import '../../styles/sideBarcss/SideBar.css'
import {MenuItems} from '../main/MenuItems'
import {SlArrowRight} from 'react-icons/sl'

import {RiMenuFoldLine} from 'react-icons/ri'

export default function SideBar() {
  // const [collapse, setCollapse] = useState(true)
  const [menus] = useState(MenuItems)
  return (
    <aside>
      {/* Header */}
      <header>
        <img src="/img/logo.png" alt="logo" width={130} />
        <RiMenuFoldLine className="collapseIcon"/>
      </header>
      {/* Button navigation */}
      <nav>
        {
          menus.map((menus, index) => (
            <ul key={index}>
              <li>
                <p className='title'>{menus.title}</p>
                <a href="#">
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
          <img src="/img/profile.png" alt="orofile" />
          <h5>Onah Sochima</h5>
        </div>
        <SlArrowRight className="profile-arrow"/>
      </section>
    </aside>
  )
}
