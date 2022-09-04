import React from 'react'

function Table() {
  return (
    <section className="attendance">
      <div className="attendance-list">
        <h1>Visitors List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Date</th>
              <th>Arrive Time</th>
              <th>Depart Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>01</th>
              <th>Prince Quarshie</th>
              <th>APPLE INC</th>
              <th>03-24-22</th>
              <th>08:00AM</th>
              <th>3:00PM</th>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <th>02</th>
              <th>Ernest Lamptey</th>
              <th>MICROSOFT CORP</th>
              <th>03-31-22</th>
              <th>07:00AM</th>
              <th>4:00PM</th>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <th>03</th>
              <th>Michael Wiafe Andoh</th>
              <th>AMAZON.COM INC</th>
              <th>03-14-22</th>
              <th>09:00AM</th>
              <th>12:00PM</th>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <th>04</th>
              <th>Kingsford Wrights</th>
              <th>SAUDI ARAMCO</th>
              <th>03-24-22</th>
              <th>10:30AM</th>
              <th>3:50PM</th>
              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;