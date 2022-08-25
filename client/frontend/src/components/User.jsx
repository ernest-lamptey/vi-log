import React, { useState } from "react";
import "../styles/User.scss";

function User() {
  const [ text, setText ] = useState({
      fName: "",
      lName: "",
      email: "",
      company: ""
  });
  const [ input, setInput ] = useState("")

 function handleChange (event) {

      setText(event.target.value);
        event.preventDefault();
   
 }

function handleClick(event) {
  
    setInput(text)
}

  return (
    <div className="body">
      <div className="container">
        <div className="title">Fill Form</div>
        <form onSubmit={handleClick}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter first name"
                value={text.fName}
              />
            </div>

            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter last name"
                value={text.lName}
              />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter email"
                value={text.email}
              />
            </div>

            <div className="input-box">
              <span className="details">Phone</span>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="input-box">
              <span className="details">Company</span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter Company name"
                value={text.company}
              />
            </div>

            <div className="input-box">
              <span className="details">Host</span>
              <select
                className="details"
                id="slect"
                //   onChange={handleChange}
                //   value={text}
              >
                <option>Name 1</option>
                <option>Name 2</option>
                <option>Name 3</option>
                <option>Name 4</option>
              </select>
              <div className="button">
                <input type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
