import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinlgePost from '../../components/singlePost/SinlgePost'
import "./single.css"

export default function Single() {
  return (
    <div className='single'>
        <SinlgePost/>
        <Sidebar/>
        
    </div>
  )
}
