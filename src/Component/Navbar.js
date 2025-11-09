import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>

      </div>

      <div className='right'>
            <Link to='/About'>About</Link>
            <Link to='/Courses'>Courses</Link>
            <Link to='/Fags'>Fags</Link>
            <Link to='/Companies'>Companies</Link>
      </div>
    </div>
  )
}
