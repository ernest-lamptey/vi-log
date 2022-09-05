import React from 'react'
import { BsPeople, BsPersonPlus, BsPersonCheck } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


function Table() {
  return (
    <div>
      <div className="card-board">
        <div className="card">
          <div className="card-icon">
            <BsPeople className="fa" />
            <FaEllipsisV />
          </div>
          <span>Total number of visitors</span>
          <p>50</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <IoIosPeople className="fa" />
            <FaEllipsisV />
          </div>
          <span>Visitors on Premises</span>
          <p>20</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <BsPersonPlus className="fa" />
            <FaEllipsisV />
          </div>
          <span>All visitors for the day</span>
          <p>30</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <BsPersonCheck className="fa" />
            <FaEllipsisV />
          </div>
          <span>Visitors checkedout</span>
          <p>25</p>
        </div>
      </div>
    </div>
  );
}

export default Table;