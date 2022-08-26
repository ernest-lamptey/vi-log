import React from "react";
import "../styles/User.scss";

function User() {

  function handleSubmit(event) {
    

    event.preventDefault()
  }

  return (
    <div className="body">
      <div className="container">
        <div className="title">Fill Form</div>
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter first name" />
            </div>

            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter last name" />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter email" />
            </div>

            <div className="input-box">
              <span className="details">Phone</span>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="input-box">
              <span className="details">Company</span>
              <input type="text" placeholder="Enter Company name" />
            </div>

            <div className="input-box">
              <span className="details">Host</span>
              <select className="details" id="slect">
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