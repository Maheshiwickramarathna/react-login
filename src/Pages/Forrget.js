import React from 'react'
import '../Style/Forget.css'
export default function Forrget() {
  return (
    <div className='forget'>
       
        <div className='center'>
            <center>
                <form id="forget-form" method='POST'>
                   <h1>Reset Your Password</h1>
                    <input type="passwor" name="pwd1" placeholder="Enter new password"/>
                   
                    <input type="password" name="pwd" placeholder="Re-enter"/>
                    
                    <button>Reset</button>
                   
                    
                </form>
            </center>
        </div>
    </div>
  )
}
