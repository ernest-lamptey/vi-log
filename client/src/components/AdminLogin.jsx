import React, { useState } from 'react';
import "../styles/AdminLogin.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AuthService from './auth-service'

function AdminLogin() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const notify = (notification) => {
    toast(notification, {position: "top-center",
    autoClose: 3000})
  }

  async function handleLogin(event) {
    event.preventDefault()
    try {
      const data = {email, password};
      await AuthService.login(data).then((res) => {
        AuthService.getCurrentUser()
        history.push('/dashboard')
      })
    } catch (error) {
      notify(error.response.data)
      console.log(error.response.data)
    }
  }

  async function handleSignUp(event) {
    event.preventDefault()
    try {
      const data = {email, password};
      await AuthService.signup(data).then(() => {
        AuthService.getCurrentUser()
        history.push('/dashboard')
      }, (error) => {
        console.log(error)
      })
    } catch (error) {
      notify(error.response.data)
      console.log(error.response.data)
    }
  }

  return (
    <div className="main-wrap">
      <ToastContainer />
      <div className="center">
        <h1>Welcome!</h1>

        <form>
          <div className="txt_field">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="email address"
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Invalid email address"
            />

            <label>
              <MdEmail className="icon" />
            </label>
          </div>
          <div className="txt_field">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              required
              pattern="*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
            />
            <label>
              <RiLockPasswordFill />
            </label>
          </div>
          <div className="pass">Forgot Password?</div>
          <div className="buttons">
            <input
              className="login"
              onClick={handleLogin}
              type="submit"
              value="Login"
            />
            <input
              className="sign-up"
              onClick={handleSignUp}
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin