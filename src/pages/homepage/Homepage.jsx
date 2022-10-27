import React from 'react'
import Header from '../../components/header/Header.jsx'
import Posts from "../../components/posts/Posts.jsx"
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import "./homepage.css"

export default function Homepage() {
  return (
    <>
       <Header/>
    <div className='home'>
        
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}
