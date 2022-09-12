import React, { useState, useEffect} from 'react'
import { MdOutlineDelete, MdOutlineEditNote }from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import '../styles/modal.scss'
import ConfirmModal from './ConfirmModal';

const Manage = () => {
    const [employees, setEmployees] = useState([])
    const [employeeInfo, setEmployeeInfo] = useState()
    const [confirmToggle, setConfirmToggle] = useState(false)
    const [dispConfirmModal, setDispConfirmModal] = useState(false)
    const [dispEditModal, setDispEditModal] = useState(true)
    const [rerender, setRerender] = useState(false)


    const notify = (notification) => {
        toast(notification, {position: "top-center",
        autoClose: 3000})
    }

    useEffect(() => {
        axios.get("/admin/employees").then((res) => {
          setEmployees(res.data);
          console.log(res.data);
        });
      }, []);

    const deleteEmployee = (payload) => {
        axios.delete('/admin/employees', {data: payload})
            .then((res) => {
                notify("Employee account deleted!")
            })
            .then((data) => {
                setRerender(!rerender)
            })
            .catch((err) => notify(err))
    }

    return (
        <div className='employees-list'>
             <div style={{display: confirmToggle ? '' : 'none'}}className='confirm'>
                <div className='overlay'></div>
                <div style={{display: dispConfirmModal ? '' : 'none' }}className='confirm-modal'>
                    <p>Are you sure you want to delete this employee?</p>
                    <button className='confirm-yes' onClick={(e) => {
                        deleteEmployee(employeeInfo)
                        setDispConfirmModal(false)
                        setConfirmToggle(false)
                    }}>Yes</button>
                    <button className='confirm-cancel' onClick={(e) => {
                        setDispConfirmModal(false)
                        setConfirmToggle(false)
                    }}>Cancel</button>
                </div>

                <form style={{display: dispEditModal ? '' : 'none'}}className='edit-modal'>
                    <label htmlFor="f_name">First Name</label>
                    <input type="text" />
                    <label htmlFor="l_name">Last Name</label>
                    <input type="text" />
                    <label htmlFor="department">Department</label>
                    <input type="text" />
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                    <label htmlFor="f_name">Phone</label>
                    <input type="text" />
                </form>
            </div>

            <ToastContainer />
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
                    <div className='grid-icon icon-2' onClick={(e) => {
                        setEmployeeInfo(item)
                        setConfirmToggle(true)
                        setDispConfirmModal(true)
                    }}><MdOutlineDelete /></div>
                </div>
            ))}
        </div>

    )
}

export default Manage