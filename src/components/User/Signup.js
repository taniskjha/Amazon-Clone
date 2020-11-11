import React from 'react'
import './signin.css'
import { useHistory, Link } from 'react-router-dom'


function Signup() {
    const history = useHistory()
    const onClick = () => {
       history.push('/login')
    }

    const imgClick = () => {
        history.push('/')
    }

    return (
        <div id="usercomponent">
           
            <img onClick={imgClick} id='imgimg'  src="/amazonLogo.png" />

         
       
        <div id="signInBorder">
          <p id="SignInTxt">
                    Create Account
          </p>
          <label>
            <strong>Your Name</strong>
            <br />
            <input type="text" name="name"  />
                </label>
                <br />
          <label>
            <strong>Email or mobile phone number</strong>
            <br />
            <input type="email" name="email"  />
          </label>
          <br />
          <label>
            <strong>Password</strong>
            {/* <span><a href="#" id="password">Forgot your password?</a></span> */}
            <br />
            <input type="password" name="password"  />
          </label>
          <div>
            <button id="amazon">Create Account</button>
          </div>
          <div id="createAccount">
            <h2 className="h2h2"><span>Already have an account?</span></h2>
            <button onClick={onClick} id="newAccount" name="newAcct">Login</button>
          </div>
        </div>
        <hr id="footer" />
        <div className="extra">
          <p className="links"><a href="#" id="first">Conditions of Use</a>
            <a href="#">Notice of Use</a>
            <a href="#">Help</a></p>
          <p className="links" id="special">
            © 1996-2020, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    )
}

export default Signup
