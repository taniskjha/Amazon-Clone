import React from 'react'
import './signin.css'
import { useHistory } from 'react-router-dom'


function Signin() {
    const history = useHistory()
    const onClick = () => {
       history.push('/signup')
    }

    const imgClick = () => {
        history.push('/')
    }

    return (
        <div id="usercomponent">
        <img  onClick={imgClick} id='imgimg' src="/amazonLogo.png" />
        <div id="signInBorder">
          <p id="SignInTxt">
            Login
          </p>
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
            <button id="amazon">Sign in</button>
          </div>
          <div id="createAccount">
            <h2 className="h2h2"><span>New to Amazon?</span></h2>
            <button onClick={onClick} id="newAccount" name="newAcct">Create your Amazon account</button>
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



export default Signin
