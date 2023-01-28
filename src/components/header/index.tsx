import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../animejs/logo'

export default function Header() {
  return (
    <>
   

    <div className="tm-top-header ">
      <div className="container">
        <div className="row">
          <div className="tm-top-header-inner ">
            <div className="tm-logo-container rotate-bl" >
             
              <img src="img/logo.png" alt="Logo" className="tm-site-logo"  style={{marginBottom:'7px'}}/>
             <h1 className="tm-site-name">
             <NavLink to={'/home'} className=" tm-site-name tm-handwriting-font">Cafe House</NavLink>
              </h1> 
            </div>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <nav className="tm-nav">
              <ul>
                <li><NavLink to={'/home'} >Home</NavLink></li>
                <li><NavLink to={'/special'} >Today Special</NavLink></li>
                <li><NavLink to={'/menu'} >Menu</NavLink></li>
                <li><NavLink to={'/contact'} >Contact</NavLink></li>
                
              </ul>
            </nav>   
          </div>           
        </div>    
      </div>
    </div>

    </>
  )
}
