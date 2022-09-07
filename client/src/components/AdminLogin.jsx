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
  // const { globalState, setGlobalState } = React.useContext(GlobalContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [notification, setNotification] = useState();

  const notify = (notification) => {
    toast(notification, {position: "top-center",
    autoClose: 3000,})
  }

  async function handleLogin(event) {
    event.preventDefault()
    try {
      const data = {email, password};
      const response = await Axios.post('/admin/login', data)
      if (response) {
        await window.localStorage.setItem("token", JSON.stringify(response.data.accessToken)) 
      }
      history.push('/admin/dashboard')
    } catch (error) {
      notify(error.response.data)
      console.log(error.response.data)
    }
  }

  function handleSignUp(event) {
    event.preventDefault()
    const data = {email, password};
    Axios.post("/admin/newAdmin", data)
      .then(res => history.push('admin/dashboard'))
      .catch(err => {
        notify(err.response.data)
        console.log(err.response.data)
      })
  }

  return (
    <div className="main-wrap">
      <ToastContainer theme="dark" />
      <div className="center">
        <h1>Welcome Admin!</h1>

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