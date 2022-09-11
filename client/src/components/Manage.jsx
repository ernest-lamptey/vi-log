import React, { useState, useEffect} from 'react'
import { MdOutlineDelete, MdOutlineEditNote }from 'react-icons/md'
import axios from 'axios'

const Manage = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get("/admin/employees").then((res) => {
          setEmployees(res.data);
          console.log(res.data);
        });
      }, []);
    return (
        <div className='employees-list'>
            <button className='add-employee'>Add Employee</button>
            <div className='grid-header'>
                <p className='header-name'>Employee Name</p>
                <p className='header-dep'>Department</p>
                <p className='header-manage'>Manage</p>
            </div>
            {employees && employees.map((item, index) => (
                <div key={item.id} className='grid-container'>
                    <p className='grid-name'>{`${item.f_name} ${item.l_name}`}</p>
                    <p className='grid-dep'>{item.department}</p>
                    <div className='grid-icon icon-1'><MdOutlineEditNote /></div>
                    <div className='grid-icon icon-2'><MdOutlineDelete /></div>
                </div>
            ))}
        </div>

    )
}

export default Manage