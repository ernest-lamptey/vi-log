import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import axios from 'axios'

const DailyVisits = () => {
    const [dates, setDates] = useState([])
    const [count, setCount] = useState([])

    useEffect(()=> {
        const datesContainer = []
        const countContainter = []
        axios.get('/admin/dailyVisits').then((res) => {
            console.log(res.data)
            res.data.forEach((item) => {
                const dt = new Date(item.date)
                const dtStr = dt.toDateString()
                datesContainer.push(dtStr.substring(4, 10))
                countContainter.push(Number(item.count))
            })
        })
        .then(() => {
            setDates(datesContainer)
            setCount(countContainter)
        })
    }, [])

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Daily Visits',
                data: count
            }
        ]
    }

    const options = {
        tension: 0.25,
        fill: true 
    }

    return (
        <Line className='line-graph' data={data} options={options} />
    )
}

export default DailyVisits;