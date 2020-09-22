import React from 'react'
import './login.css'
import {ReactComponent as Mail} from '../../assets/mailico.svg'
import {ReactComponent as Pass} from '../../assets/pass.svg'


export default function Login() {
    return (
        <>

        <div id="login_container">
           <div id="login_form">
               <div id="inputs">
                   <span id="title">
                   Sign in
                   </span>
                    {/* <Mail id="icons" className="mail"/> */}
                   <input type="email" name="email" id="email" placeholder="email"/>
                   {/* <Pass id="icons" className="pass"/> */}
                   <input type="password" name="password" id="password"/>
                   <button>Login</button>
               </div>
           </div>
        </div>
            
        </>
    )
}