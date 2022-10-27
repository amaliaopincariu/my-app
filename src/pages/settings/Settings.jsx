import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"
export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profil Picture</label>
            <div className='settingsPP'>
              <img className='settingsPP' src='46350386_2141111169245438_5351674193077338112_n.jpg' alt=''/>
              <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id= "fileInput" style={{display:"none"}}></input>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Amalia'/>
            <label>Email</label>
            <input type="emali" placeholder='Amalia@gmail.com'/>
            <label>Password</label>
            <input type="password" />
            <button className='settingsSubmit'>Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
