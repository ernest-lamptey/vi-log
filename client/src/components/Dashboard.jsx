import React from "react";
import "../styles/Dashboard.scss";
import logo from "../assets/Amalitech-Ghana.png";
import { MdDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import Cards from "./Cards";
// import Table from "./Table";
import { AiOutlineHome } from "react-icons/ai";
function Dashboard() {
  return (
    <div className="wrap">
      <div className="sidebar">
        <ul>
          <li><AiOutlineHome /></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;






//  <section>
//       <div className="wrapper">
//         <nav className="header">
//           <ul>
//             <li>
//               <a href="#" className="logo">
//                 <img src={logo} alt="/" />
//               </a>
//             </li>

//             <li>
//               <a href="#">
//                 <MdDashboard className="fas" />
//                 <span className="nav-item">Dashboard</span>
//               </a>
//             </li>

//             <li>
//               <a href="#">
//                 <IoMdContact className="fas" />
//                 <span className="nav-item">Contact</span>
//               </a>
//             </li>

//             <li>
//               <a href="#">
//                 <TbReportSearch className="fas" />
//                 <span className="nav-item">Report</span>
//               </a>
//             </li>
//             <li className="logout">
//               <a href="#">
//                 <MdLogout className="fas" />
//                 <span className="nav-item">Logout</span>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <section className="main">
//           <div className="main-top">
//             <h1>Total Visitors</h1>
//             <BsFillPersonLinesFill className="person" />
//           </div>

//           <Cards />
//           <Table />
          
//         </section>
//       </div>
//     </section>