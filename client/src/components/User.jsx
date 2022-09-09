import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/User.scss";
import Axios from 'axios';
import SearchResult from "./SearchResult";


function User() {
  const location = useLocation().state;
  const item = location ? JSON.parse(location) : ""

  const [employees, setEmployee] = useState([]);
  const [employeeMatch, setEmployeeMatch] = useState([])
  const [visitor_name, setVisitorName] = useState(() => item.visitor_name ? item.visitor_name : "");
  const [email, setEmail] = useState(() => item.email ? item.email : "");
  const [phone, setPhone] = useState(() => item.phone ? item.phone : "");
  const [company, setCompany] = useState(() => item.company ? item.company : "");
  const [purpose, setPurpose] = useState(() => { return ""});
  const [hostName, setHostName] = useState(() => { return ""});
  const [host_id, setHost_id] = useState(() => { return ""});

  useEffect(() => {
    Axios.get("/admin/employees").then((res) => {
      setEmployee(res.data)
      console.log(res.data)
    });
  }, [])

  const searchEmployees = (text) => {
    let matches;
    if (text.length < 3) {
      matches = null;
      setEmployeeMatch(matches)
    } else {
      matches = employees.filter((employee) => {
        const regex = new RegExp(`${text}`, "gi");
        return `${employee.f_name} ${employee.l_name}`.match(regex) || employee.l_name.match(regex);
      })
      setEmployeeMatch(matches)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = {visitor_name, email, phone, company, purpose, host_id}
    Axios.post("/visitors", data)
      .then(res => console.log("request sent"))
      .catch(err => console.error(err))
  }

  return (
    <div className="body">
      <div className="container">
        <div className="title">Tell us about yourself</div>
        <form onSubmit={handleSubmit}>

          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input
                value={visitor_name}
                onChange={(e) => setVisitorName(e.target.value)}
                type="text"
                placeholder="eg. John Smith"
                required
                pattern="^[a-zA-Z\s]*$"
              />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="eg. johnsmith@gmail.com" />
            </div>

            <div className="input-box">
              <span className="details">Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="eg. 0244672301"
                required
                minLength="10"
                maxLength="10"
                // pattern=
              />
            </div>

            <div className="input-box">
              <span className="details">Company</span>
              <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Where do you work?" />
            </div>

            <div className="input-box">
              <span className="details">Purpose</span>
              <input value={purpose} onChange={(e) => setPurpose(e.target.value)}type="text" placeholder="eg. Contractor" />
            </div>

            <div className="input-box">
              <span className="details">Host</span>
              <input 
                value={hostName} type="text" placeholder="Enter your host name" 
                onChange={(e) => 
                  {
                    setHostName(e.target.value)
                    searchEmployees(e.target.value)
                  }}
              />
              {employeeMatch && employeeMatch.map((item, index) => (
                <div key={index} onClick={(e) => {
                  console.log("list clicked")
                  setHostName(`${item.f_name} ${item.l_name}`)
                  setHost_id(`${item.id}`)
                  searchEmployees('')
                }} >
                  <SearchResult 
                  f_name={item.f_name} l_name={item.l_name} department={item.department}/>
                </div>

              ))} 
              
            </div>

            <div className="button">
              <input id="submit-button" type="submit" />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
