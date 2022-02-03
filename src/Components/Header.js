import React from 'react';
import Navabr from './Navabr';

function Header() {
  return (
  <div id='main'>
      <Navabr/>
      <div className='name'>
          <h1>It's a <span>ReactJS</span> Website</h1>
          <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Deserunt ducimus ratione magni reiciendis quos eum?</p>
               <div className='header-btns'>
                   <a href='#' className='cv-btn'>Hire Me</a>
                   <a href='#' className='cv-btn1'>Download App</a>
               </div>
      </div>
      <div className='arrow'></div>
  </div>
  )
}

export default Header;
