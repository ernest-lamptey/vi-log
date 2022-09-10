import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Reports = () => {
    const [visitData, setVisitData] = useState([]);
    const [employees, setEmployees] = useState([]);

    const getVisits = async () => {
        const response = await axios.get('/admin/visits')
            .then((res) => res.data)
            .catch((err) => console.log(err))
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
            <h1>Reports</h1>
            <h3>SignedInVisitors</h3>
            <table>
                <thead>
                    <tr>
                        <th>Visitor</th>
                        <th>Host</th>
                        <th>Signed in</th>
                        <th>Signed out</th>
                    </tr>
                </thead>
                <tbody>
                    {visitData && visitData.map((element, index) => (
                        <tr key={index}>
                            <td>{element.visitor_name}</td>
                            <td>{employees.map((item) => {
                                if(item.id === element.host_id){
                                    return `${item.f_name} ${item.l_name}`
                                }
                            })}</td>
                            <td>{element.sign_in}</td>
                            <td>{element.sign_out}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Reports