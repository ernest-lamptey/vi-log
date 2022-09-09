import React from 'react';
import "../styles/Home.scss";
import logo from  "../assets/Amalitech_logo.png"
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homepage'>
            <div className='title'>
                <img className="logo-img" src={logo} alt="" />
                <h1 className='caption'>IT SERVICE COMPANY</h1>
            </div>
            <div className='button-group'>
                <NavLink to="/visitors" className='cta'> 
                    <button className='sign-in'>Click to Sign In</button>
                </NavLink>
                <NavLink to='./signout'className='cta'>
                    <button className='sign-out'>Click to Sign Out</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;