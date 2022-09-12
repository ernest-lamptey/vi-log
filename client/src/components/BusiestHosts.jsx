import React, {useState, useEffect, useCallback, useRef} from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'
import axios from 'axios'

const BusiestHosts = () => {
    let names = useRef([])
    let count = useRef([])
    
    const getHostData = async () => {
        await axios.get('/admin/busiestHosts').then((res) => {
            names.current = res.data.map((item) => `${item.f_name} ${item.l_name}`)
            count.current = res.data.map((item) => item.count)
        })
    }


    useEffect(() => {
        getHostData()
    }, [])

    const data = {
        labels: names.current,
        datasets: [
            {
                label: 'Daily Visits',
                data: count.current
            }
        ]
    }

    return (
        <Doughnut data={data} />
    )
}

export default BusiestHosts;