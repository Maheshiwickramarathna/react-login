import React, { useState } from 'react'
import '../Style/Forget.css'
import { Link } from 'react-router-dom'
export default function Forrget() {

  
  return (
    
    <div className='forget'>
       
        
            <div className='con'>
                <form id="forget-form" method='POST'>
                   <h3>Forget Password</h3>
                   <p>Enter your Email and we'll send you a link to reset your password</p>
                    
                   
                    <input type="email" name="em" placeholder="Enter email"/>
                    
                    <button>Submit</button>
                    <Link to= '/'> Back to Login</Link>
                 
                   
                    
                </form>
           </div>
       
    </div>
  )
}
