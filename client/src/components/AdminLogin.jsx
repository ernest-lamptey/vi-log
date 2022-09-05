import React, { useState } from 'react';
import "../styles/AdminLogin.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function AdminLogin() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [notification, setNotification] = useState();

  const notify = (notification) => {
    toast(notification, {position: "top-center",
    autoClose: 3000,})
  }

  function handleLogin(event) {
    event.preventDefault()
    const data = {email, password};
    Axios.post("/admin/login", data)
      .then(res => history.push('/dashboard'))
      .catch(err => {
        notify(err.response.data)
        console.log(err.response.data)
      })
  }

  function handleSignUp(event) {
    event.preventDefault()
    const data = {email, password};
    Axios.post("/admin/newAdmin", data)
      .then(res => history.push('/dashboard'))
      .catch(err => {
        notify(err.response.data)
        console.log(err.response.data)
      })
  }

  return (
    <div className="main-wrap">
      <ToastContainer 
        theme='dark'
      />
      <div className="center">
        <h1>Welcome Admin!</h1>

        <form>
          <div className="txt_field">
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" required placeholder="email address" />
            <label>
              <MdEmail className="icon" />
            </label>
          </div>
          <div className="txt_field">
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" required placeholder="password" />
            <label>
              <RiLockPasswordFill />
            </label>
          </div>
          <div className="pass">Forgot Password?</div>
          <div className='buttons'>
            <input onClick={handleLogin} type="submit" value="Login" />
            <input onClick={handleSignUp} type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin