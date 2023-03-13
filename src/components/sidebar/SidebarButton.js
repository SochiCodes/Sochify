import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './SidebarButton.css'

import { IconContext } from 'react-icons'

export default function SidebarButton(props){
  const location = useLocation();
  const isActive = location.pathname === props.to;

  const btnClass = isActive? "menu-btn active": "menu-btn"

  return (
    <Link to={props.to}>
        <div className={btnClass}>
            <IconContext.Provider value={{size: "24px", className:"btn-icon-mu"}}>
              {props.icon}
              <p>{props.title} </p>
            </IconContext.Provider>
        </div>
    </Link>
  )
}
