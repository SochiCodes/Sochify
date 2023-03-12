import React from 'react'
import { loginEndPoint } from '../../../spotify'

import './../../../styles/homepagecss/maincss/Header.css'

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
    </header>
  )
}

export const Login = () =>{
  return(
    <a href={loginEndPoint}><button className="login">Log in</button></a>
  )
}

export const SignUp = () =>{
  return(
    <a href={loginEndPoint}><button className="signUp">Sign up</button></a>
  )
}
export const Logout = () =>{
  return(
    <a href="#"><button className="signUp">Sign up</button></a>
  )
}
// export const User = () =>{
//   return(
//     <a href={loginEndPoint}><button className="signUp">Sign up</button></a>
//   )
// }