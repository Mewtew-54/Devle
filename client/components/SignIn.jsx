import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    function submitHandler(){
        const userData = {
            username: document.getElementById('username').value ,
            password: document.getElementById('password').value ,
        }
        axios.post('/api/signin', userData);
        navigate('/mainpage');
    }
    return (
        <div className="home">
            <div className="welcome" data-testid="SignIn">
                <h1 className="welcomeMessage">Welcome to Devle!</h1>
                <div className='loginSignin'>
                    <form className="form" onSubmit={submitHandler}>
                        <label className="username">
                            <input type="text" name="username" id="username" placeholder="Enter username" />
                        </label>
                        <label className="password">
                            <input type="password" name="password" id="password" placeholder="Enter password" />
                        </label>
                        <button className="link" id="submitBtn" type="submit" >
                            Sign In
                        </button>
                        <button className="link needAccount">
                            <Link id='link' to='/signup'>Need an account?</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;