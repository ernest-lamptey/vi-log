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

        // await busiest.forEach(element => {
        //     employees.forEach(item => {
        //         console.log(item)
        //         if (element.host_id === item.id){
        //             console.log(`${element.f_name} ${element.l_name}`)
        //             names.current.push(`${element.f_name} ${element.l_name}`)
        //             count.current.push(item.count)
        //         }
        //     })
        // })
        // console.log(names.current)
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