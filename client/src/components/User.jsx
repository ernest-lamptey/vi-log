import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/User.scss";
import Axios from "axios";


function User() {
  const location = useLocation().state;
  const item = location ? JSON.parse(location) : "";

  const [employees, setEmployee] = useState([]);
  const [visitor_name, setVisitorName] = useState(() => (item.name ? item.name : ""));
  const [email, setEmail] = useState(() => (item.email ? item.email : ""));
  const [phone, setPhone] = useState(() => (item.phone ? item.phone : ""));
  const [company, setCompany] = useState(() =>
    item.company ? item.company : ""
  );
  const [purpose, setPurpose] = useState(() => item.purpose ? item.purpose : "");
  const [host_id, setHost_id] = useState(() => item.host_id ? item.host_id : "");

  /* multi page useState Hook */
  const [formStep, setFormStep] = useState(0);
  const [isValid, setValid] = useState(false);
   
  const getId = (input) => {
    const info = input.split(' ');
    employees.forEach((item) => {
      if ((item.f_name === info[0] || item.l_name === info[1]) && item.department === info[info.length - 1]) {
        setHost_id(item.id)
      }
    })
  }


  function Validate() {
    return name.length & company.length & phone.length & email.length & purpose.length & hostName.length;
     
  }

  useEffect(()=> {
    const isValid = Validate();
    setValid(isValid);
  }, [name, company, phone, email, purpose, hostName])


  useEffect(() => {
    Axios.get("/admin/employees").then((res) => {
      setEmployee(res.data);
      console.log(res.data);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = { visitor_name, email, phone, company, purpose, host_id };
    console.log(data)
    Axios.post("/visitors", data)
      .then((res) => console.log("request sent"))
      .then(() => forward())
      .catch((err) => console.error(err));
  }

  /* function for multipage form */
  function forward() {
    setFormStep((cur) => cur + 1);
  }
  function backward() {
    if (formStep < 1) {
      return undefined
    }else {
      return setFormStep((cur) => cur - 1);
    }
  }

  function renderTitle() {
    if (formStep > 3) {
      // return undefined;
    } else {
      return <h1 className="">Your host has been notified... Kindly take a seat.</h1>;
    }
  }


  return (
    <div className="body">
      <div className="arrows">
        <div className="arr left" onClick={backward}>
          <div></div>
        </div>
        <div className="arr right" onClick={forward} disabled={!isValid}>
          <div></div>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            {formStep === 0 && (
              <section>
                <div className="title">Tell us about yourself</div>
                <div className="card-box">
                  <span className="details">Name</span>
                  <input
                    value={visitor_name}
                    onChange={(e) => setVisitorName(e.target.value)}
                    type="text"
                    placeholder="eg. John Smith"
                    pattern="^[a-zA-Z\s]*$"
                    required
                  />
                </div>
                <div className="card-box">
                  <span className="details">Company</span>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Where do you work?"
                    required
                    pattern="[A-Za-z0-9].{1,}"
                    title="Please Enter Company Name"
                  />
                </div>
                <div className="card-box">
                  <span className="details">Phone</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="eg. 0244672301"
                    minLength="10"
                    maxLength="10"
                    required
                    pattern="[0-9]{8,20}"
                    title="please enter number only"
                  />
                </div>
                <div className="card-box">
                  <span className="details">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                    placeholder="eg. johnsmith@gmail.com"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Invalid email address"
                  />
                </div>
              </section>
            )}
            {formStep === 1 && (
              <section className="cards">
                <div className="title">Tell us about yourself</div>
                <div className="card-box">
                  <span className="details">Purpose</span>
                  <select name="selected" onChange={(e) => { 
                    setPurpose(e.target.value)
                  }} className="selected" required>
                    <option value="Official Visit">Official Visit</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Business Meeting">Business Meeting</option>
                    <option value="Client Enquiry">Client Enquiry</option>
                  </select>
                </div>

                <div id="host-area" className="card-box">
                  <span className="details">Host</span>
                  <input list="host-list" placeholder="eg. John Smith" className="selected" required onInput={(e) => {
                      getId(e.target.value)
                    }}/>
                      <datalist id="host-list">
                      {employees && employees.map((item, index) => (
                        <option value={`${item.f_name} ${item.l_name} - ${item.department}`}>
                          {`${item.f_name} ${item.l_name} - ${item.department}`}
                       </option>
                    ))}

                  </datalist>
                </div>

                <div className="button">
                  <input onClick={handleSubmit} id="submit-button" type="submit" />
                </div>
              </section>
            )}

            {formStep === 2 && <section>{renderTitle()}</section>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
