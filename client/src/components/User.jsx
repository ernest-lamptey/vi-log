import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/User.scss";
import Axios from "axios";
import SearchResult from "./SearchResult";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

function User() {
  const location = useLocation().state;
  const item = location ? JSON.parse(location) : "";

  const [employees, setEmployee] = useState([]);
  const [employeeMatch, setEmployeeMatch] = useState([]);
  const [name, setName] = useState(() => (item.name ? item.name : ""));
  const [email, setEmail] = useState(() => (item.email ? item.email : ""));
  const [phone, setPhone] = useState(() => (item.phone ? item.phone : ""));
  const [company, setCompany] = useState(() =>
    item.company ? item.company : ""
  );
  const [purpose, setPurpose] = useState(() => {
    return "";
  });
  const [hostName, setHostName] = useState(() => {
    return "";
  });
  const [host_id, setHost_id] = useState(() => {
    return "";
  });

  /* multi page useState Hook */
  const [formStep, setFormStep] = useState(0);
const { watch, register } = useForm();
const [ fillForm, setFillForm ] = useState(false);
  

  
  useEffect(() => {
    Axios.get("/admin/employees").then((res) => {
      setEmployee(res.data);
      console.log(res.data);
    });
  }, []);

  const searchEmployees = (text) => {
    let matches;
    if (text.length < 3) {
      matches = null;
      setEmployeeMatch(matches);
    } else {
      matches = employees.filter((employee) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          `${employee.f_name} ${employee.l_name}`.match(regex) ||
          employee.l_name.match(regex)
        );
      });
      setEmployeeMatch(matches);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = { name, email, phone, company, purpose, host_id };
    Axios.post("/visitors", data)
      .then((res) => console.log("request sent"))
      .catch((err) => console.error(err));
  }

  /* function for multipage form */
  function forward() {
    setFormStep((cur) => cur + 1);
  }
  function backward() {
    setFormStep((cur) => cur - 1);
  }

  function renderTitle() {
    if (formStep > 2) {
      return undefined;
    } else {
      return <h1>Contacting your host...</h1>;
    }
  }


  return (
    <div className="body">
      <div className="arrows">
        <div className="arr left" onClick={backward}>
          <div></div>
          {/* <IoChevronBackCircleOutline className="back" /> */}
        </div>
        <div className="arr right" onClick={forward}>
          <div></div>
          {/* <IoChevronForwardCircleOutline className="forward" /> */}
        </div>
      </div>
      <div className="container">
        <div className="title">Tell us about yourself</div>
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            {formStep === 0 && (
              <section>
                <div className="card-box">
                  <span className="details">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <div className="card-box">
                  <span className="details">Purpose</span>
                  <select className="selected" required>
                    <option
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      Visit
                    </option>
                    <option
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      Visit
                    </option>
                    <option
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      Visit
                    </option>
                    <option
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      Visit
                    </option>
                  </select>
                </div>

                <div id="host-area" className="card-box">
                  <span className="details">Host</span>
                  <select className="selected" required>
                    <option value="choose host name" selected disabled>
                      Choose host name
                    </option>
                    <option
                      value={hostName}
                      onChange={(e) => {
                        setHostName(e.target.value);
                        searchEmployees(e.target.value);
                      }}
                    >
                      Ernest Lamptey
                    </option>
                    <option
                      value={hostName}
                      onChange={(e) => {
                        setHostName(e.target.value);
                        searchEmployees(e.target.value);
                      }}
                    >
                      Prince Quarshie
                    </option>
                    <option
                      value={hostName}
                      onChange={(e) => {
                        setHostName(e.target.value);
                        searchEmployees(e.target.value);
                      }}
                    >
                      Mike
                    </option>
                  </select>

                  {employeeMatch &&
                    employeeMatch.map((item, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          console.log("list clicked");
                          setHostName(`${item.f_name} ${item.l_name}`);
                          setHost_id(`${item.id}`);
                          searchEmployees("");
                        }}
                      >
                        <SearchResult
                          f_name={item.f_name}
                          l_name={item.l_name}
                          department={item.department}
                        />
                      </div>
                    ))}
                </div>

                <div className="button">
                  <input id="submit-button" type="submit" />
                </div>
              </section>
            )}

            {formStep === 2 && <section>{renderTitle()}</section>}
            <pre>
              {/* {JSON.stringify(watch(), null, 2)} */}
            </pre>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
