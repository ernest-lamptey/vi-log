import React, {useState, useEffect, useCallback, useRef} from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'
import axios from 'axios'

const BusiestHosts = () => {
    let names = useRef([])
    let count = useRef([])
    const [employees, setEmployees] = useState([])
    const [busiest, setBusiest] = useState([])
    
    const getEmployees = async () => {
        await axios.get('/admin/employees').then((res) => {
            setEmployees(res.data)
        })

        await axios.get('/admin/busiestHosts').then((res) => {
            setBusiest(res.data)
        })
    }


    useEffect(() => {
        getEmployees()
        console.log(employees)
        console.log(busiest)
    }, [])

    const data = {
        labels: names,
        datasets: [
            {
                label: 'Daily Visits',
                data: count
            }
        ]
    }

    return (
        <Doughnut data={data} />
    )
}

export default BusiestHosts;