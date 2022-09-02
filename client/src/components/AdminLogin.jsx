import React from 'react'

function AdminLogin() {
  return (
    <div className="wrapper">
        <h1>Sign in</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='Password'/>
          <input type="text" name="" value="LOGIN" />
        </form>
        <div className='bottom-text'>

        </div>

    </div>
  )
}

export default AdminLogin