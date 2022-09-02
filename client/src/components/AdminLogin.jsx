import React from 'react';
import "../styles/AdminLogin.scss";

function AdminLogin() {
  return (
<div className='main-wrap'>
    <div className="wrapper">
        <h1>Sign in</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='Password'/>
          <input type="text" name="" value="LOGIN" />
        </form>
        <div className='bottom-text'>
           <input type="checkbox" name='remember' checked="checked"/>
           <a href="#">Forgot Password</a>
        </div>

    </div>
</div>
  )
}

export default AdminLogin