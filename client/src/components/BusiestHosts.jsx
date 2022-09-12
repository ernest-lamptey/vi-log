import React, {useState, useEffect, useRef} from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'
import axios from 'axios'

const BusiestHosts = () => {
    const [names, setNames] = useState([])
    const [count, setCount] = useState([])
    
    const getHostData = async () => {
        await axios.get('/admin/busiestHosts').then((res) => {
            setNames(res.data.map((item) => `${item.f_name} ${item.l_name}`))
            setCount(res.data.map((item) => item.count))
        })
    }


    useEffect(() => {
        getHostData()
    }, [])

    const data = {
        labels: names,
        datasets: [
            {
                label: 'Daily Visits',
                data: count,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ]
            }
        ]
    }

    return (
        <Doughnut className='doughnut' data={data} />
    )
}

export default BusiestHosts;