import React from 'react';
import "../styles/Home.scss";
import logo from  "../assets/Amalitech_logo.png"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homepage'>
            <div className='title'>
                <img className="logo-img" src={logo} alt="" />
                <h1 className='caption'>IT SERVICE COMPANY</h1>
            </div>
            <Link to="/visitors" className='cta'> 
                <button>Click to begin</button>
            </Link>

        </div>
    );
};

export default Home;