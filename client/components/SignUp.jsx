import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = (props) => {
  const navigate = useNavigate();
  function submitHandler(){
    const userData = {
      username: document.getElementById('username').value ,
      password: document.getElementById('password').value ,
      email: document.getElementById('email').value
    }
    axios.post('/api/signup', userData);
    navigate('/signin');
    
  }
  // if (this.props.redirect) {
  //   return <Navigate to={'/login'}/>
  // }
    return (
        <div className="home">
        <div className="welcome" data-testid="SignUp">
          <h1 className="welcomeMessage">Welcome to Devle!</h1>
          <h2></h2>
  
          <form className="form" onSubmit={submitHandler}>
            <label className="username">
              <input type="text" name="username" id="username" placeholder="enter username" />
            </label>
            <label className="email">
              <input type="email" name="email" id="email" placeholder="your@email.here" />
            </label>
            <label className="password">
              <input type="password" name="password" id="password" placeholder="Enter password" />
            </label>
            {/* <label className="passwordConfirm">
              <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="confirm password" />
            </label> */}
            {/* {failedSignUp} */}
            <button className="link" id="submitBtn" type="submit">
              Sign Up
            </button>
            <button className="link needAccount">
              <Link id='link' to='/signin'>Already have an account?</Link>
            </button>
          </form>
        </div>
      </div>
    )
}

export default SignUp;