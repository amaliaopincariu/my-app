import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src='20424034_1563595796996981_4528451596249703363_o.jpg' alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita distinctio, commodi sequi ipsum consectetur, id porro ducimus consequuntur quas cupiditate, dolore </p>
      </div>
      <div className= "sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
       <ul className='sidebarList'>
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
        <li className='sidebarListItem'>Style</li>
        <li className='sidebarListItem'>Sport</li>
        <li className='sidebarListItem'>Tech</li>
        <li className='sidebarListItem'>Cinema</li>

       </ul>
      </div>
      <div className= "sidebarItem">
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
            <i className="sidebarSocialItem fa-brands fa-square-facebook"></i>
            <i className="sidebarSocialItem fa-brands fa-square-github"></i>
            <i className="sidebarSocialItem fa-brands fa-linkedin"></i>
            <i className="sidebarSocialItem fa-brands fa-square-instagram"></i>
      </div>
      </div>

    </div>
    
  )
}
