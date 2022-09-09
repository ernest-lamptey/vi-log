import React, {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const SignedInVisitors = () => {
    const [visitData, setVisitData] = useState('');
    const [employees, setEmployees] = useState([]);

    const getVisits = async () => {
        const response = await axios.get('/admin/visits')
            .then((res) => res.data)
            .then((data) => data.filter((item) => item.sign_out !== null))
        setVisitData(response)
    }
    
    const getEmployees = async () => {
        const response = await axios.get('/admin/employees').then((res) => res.data)
            setEmployees(response)
    }
    
    useEffect(() => {
        getVisits()
        getEmployees()
    }, [])

    return (
        <div>
            <h1>SignedInVisitors</h1>
            <table>
                <thead>
                    <tr>
                        <th>Signed in</th>
                        <th>Visitor</th>
                        <th>Host</th>
                    </tr>
                </thead>
                <tbody>
                    {visitData && visitData.map((element, index) => (
                        <tr key={index}>
                            <td>{element.sign_in}</td>
                            <td>{element.visitor_name}</td>
                            <td>{employees.map((item) => {
                                if(item.id === element.host_id){
                                    return `${item.f_name} ${item.l_name}`
                                }
                            })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default SignedInVisitors