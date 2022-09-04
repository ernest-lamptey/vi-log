import React, { useState } from 'react';
import "../styles/AdminLogin.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useHistory } from 'react-router-dom';
import Axios from 'axios';



function AdminLogin() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault()
    const data = {email, password};
    Axios.post("/admin/login", data)
      .then(res => history.push('/dashboard'))
      .catch(err => console.error(err))
  }

  return (
    <div className="main-wrap">
      <div className="center">
        <h1>Sign in</h1>

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
          <input onClick={handleSubmit} type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin