import React from 'react';

const SignOut = () => {
    return (
        <div className=''>
            <h1>Enter your name and confirm your details to sign out</h1>
            <div className="input-box">
              <span className="details">Purpose</span>
              <input type="text" placeholder="eg. Contractor" />
            </div>
        </div>
    );
};

export default SignOut;