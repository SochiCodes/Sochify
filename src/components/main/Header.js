import React from 'react'

import '../../styles/maincss/Header.css'

import {SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import {HiMenuAlt3} from 'react-icons/hi' 
import {RiSearchLine}from 'react-icons/ri'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <SlArrowLeft className="arrowIcons"/>
        <SlArrowRight className="arrowIcons"/>
      </nav>
      <form action="POST">
        <input type="text" className="search" placeholder="Search anything"/>
        <RiSearchLine className="searchIcon"/>
      </form>
      <div className="navButtons">
        <button className="signUp">Sign up</button>
        <button className="login">Log in</button>
        <button className="mobileMenu"><HiMenuAlt3/></button>
      </div>
    </header>
  )
}
