import React from 'react'
import './Header.css'
//icon
import {SlArrowLeft, SlArrowRight } from 'react-icons/sl'
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
    </header>
  )
}