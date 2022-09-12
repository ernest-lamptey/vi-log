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
    const [modalToggle, setModalToggle] = useState(false)
    const [dispConfirmModal, setDispConfirmModal] = useState(false)
    const [dispEditModal, setDispEditModal] = useState(false)
    const [f_name, setFname] = useState()
    const [l_name, setLname] = useState()
    const [department, setDepartment] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [id, setId] = useState()

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
            .catch((err) => notify(err))
    }

    const updateEmployee = (payload) => {
        axios.put('/admin/employees', payload)
            .then((res) => {
                notify("Employee info updated!")
            })
            .catch((err) => notify(err))
    }

    return (
        <div className='employees-list'>
             <div style={{display: modalToggle ? '' : 'none'}}className='confirm'>
                <div className='overlay'></div>
                <div style={{display: dispConfirmModal ? '' : 'none' }}className='confirm-modal'>
                    <p>Are you sure you want to delete this employee?</p>
                    <button className='confirm-yes' onClick={(e) => {
                        deleteEmployee(employeeInfo)
                        setDispConfirmModal(false)
                        setModalToggle(false)
                    }}>Yes</button>
                    <button className='confirm-cancel' onClick={(e) => {
                        setDispConfirmModal(false)
                        setModalToggle(false)
                    }}>Cancel</button>
                </div>

                <form style={{display: dispEditModal ? '' : 'none'}}className='edit-modal'>
                    <label htmlFor="f_name">First Name</label>
                    <input type="text" value={f_name} onChange={(e) => setFname(e.target.value)} />
                    <label htmlFor="l_name">Last Name</label>
                    <input type="text" value={l_name} onChange={(e) => setLname(e.target.value)} />
                    <label htmlFor="department">Department</label>
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="f_name">Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <div className='form-buttons'>
                        <button onClick={(e) => {
                            const data = {id, f_name, l_name, department, email, phone}
                            updateEmployee(data)
                            setDispEditModal(false)
                            setModalToggle(false)
                        }}>Submit</button>
                        <button onClick={(e) => {
                            setDispEditModal(false)
                            setModalToggle(false)
                        }}>Cancel</button>
                    </div>
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
                    <div className='grid-icon icon-1' onClick={(e) => {
                        setId(item.id)
                        setFname(item.f_name)
                        setLname(item.l_name)
                        setDepartment(item.department)
                        setEmail(item.email)
                        setPhone(item.phone)
                        setModalToggle(true)
                        setDispEditModal(true)
                    }}><MdOutlineEditNote /></div>
                    <div className='grid-icon icon-2' onClick={(e) => {
                        setEmployeeInfo(item)
                        setModalToggle(true)
                        setDispConfirmModal(true)
                    }}><MdOutlineDelete /></div>
                </div>
            ))}
        </div>

    )
}

export default Manage