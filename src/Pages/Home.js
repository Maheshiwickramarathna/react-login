import React from 'react'
import BannerImage from '../Images/Me.jpg'
import '../Style/Home.css'

export default function Home() {
  return (
    <div className='home'>
        
            <div className='left'  style={{ backgroundImage: `url(${BannerImage})` }}>
                <h1>Home page</h1>
            </div>
            <div className='right'></div>
        
        
    </div>
  )
}
