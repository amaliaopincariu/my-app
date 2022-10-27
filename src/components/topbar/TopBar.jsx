import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
  return (
    <div className='top'>
        <div className='topleft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-github"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topcenter'>
            <ul className='topList'>
                <li className='topListItem' > <Link className= "link" to="/">HOME</Link></li>
                <li className='topListItem' > <Link className= "link" to="/">ABOUT</Link></li>
                <li className='topListItem' ><Link className= "link" to="/">CONTACT</Link></li>
                <li className='topListItem' ><Link className= "link" to="/write">WRITE</Link></li>
                <li className='topListItem' >{ user && "LOGOUT"}</li>
                
            </ul>

        </div>
        <div className='topright'>{
            user ? ( 
                <img className="topImg" src="46350386_2141111169245438_5351674193077338112_n.jpg" alt="nature love"/>
           

            ) : (
                <ul className='topList'>
                    <li className='topListItem'>
                    <Link className='link' to="/login">LOGIN</Link>  
                    </li>
                    <li className='topListItem'>
                    <Link className='link' to="/register ">REGISTER</Link> 
                    </li>
              
                </ul>
            )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            
        </div>

    </div>
  )
}
