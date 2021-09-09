import React from 'react';
import logo from '../../assets/nutcache-logo.png';
import blueWave from '../../assets/blue-wave.png';
import './Header.css'

function Header() {
    return (
      <>
        <div className="logo-container">
          <img src={logo} className="nut-logo" alt="Nutcache Logo"/>
        </div>
        <img src={blueWave} className="blue-wave" alt="Blue Wave"/>

        <div className="txt-header">
          <h4>the best tool to organize your employee information</h4>
          
          <a href="https://www.nutcache.com/" target="_blank" rel="noreferrer">
            LEARN MORE
          </a>
        </div>  
      </>
    );
  }
  
export default Header;