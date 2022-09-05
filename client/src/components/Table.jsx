import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Table() {
  // const [visitsData, setVisitsData] = useState();
  const getvisitsData = async () => {
    const response = await Axios.get('http://localhost:5000/admin/visits').then((res) => res.data);
    console.log(response)
  }

  useEffect(() => {
    getvisitsData()
  }, [])

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
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table