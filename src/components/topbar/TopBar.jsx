import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
  return (
    <div className='top'>
          <div className='topleft'>
          <img className="topImg" src="wcd logo (1).svg" alt="logo"/>
           
            
        </div>
       
        <div className='topright'>
            <ul className='topList'>
                <li className='topListItem' > <Link className= "link" to="/">ACASA</Link></li>
                <li className='topListItem' > <Link className= "link" to="/">SERVICII</Link></li>
                <li className='topListItem' ><Link className= "link" to="/">DESPRE NOI</Link></li>
                <li className='topListItem' ><Link className= "link" to="/write">CONTACT</Link></li>
                
            </ul>

        </div>

    </div>
  )
}
