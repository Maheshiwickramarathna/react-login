import React from 'react'
import BannerImage from '../Images/Me.jpg'
import '../Style/Home.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/about");
  };
  return (
    <div className='home'>
        
            <div className='left'  style={{ backgroundImage: `url(${BannerImage})` }}>
                <h1>Home page</h1>
            </div>

            <div className='right'>
               
                <p><span id="x">Login</span><br></br>Unlock Your Journey, Login to Developerstack</p>

                <form id="contact-form" onSubmit={handleLogin}>
                    <input type=" email" name="mail" placeholder="Enter Email"/>
                   
                    <input type="password" name="pwd" placeholder="xxxxxxxx"/>
                    <Link to='/Forrget' id='y'>Forget Password</Link>
                    <div>
                        <span className='b'><button><Link to='/About'>Login</Link></button></span>  
                    </div>
                     <span> New To Our Platform? <Link to='/Register'>Register Now</Link></span>
                    
                </form>
                
            </div>
        
        
    </div>
  )
}
