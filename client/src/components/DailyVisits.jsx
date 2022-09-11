import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import axios from 'axios'
import '../styles/Dashboard.scss'
import { defaults } from 'chart.js';

const DailyVisits = () => {
    const [dates, setDates] = useState([])
    const [count, setCount] = useState([])

    useEffect(()=> {
        defaults.font.family = 'Montserrat';
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
                label: 'Daily visits in the last 30 Days',
                data: count,
                borderColor: ['rgba(234, 96, 16, 0.3)'],
                backgroundColor: ['rgba(234, 96, 16, 0.3)'],
            }
        ]
    }

    const options = {
        tension: 0.25,
        fill: true,
        font: {
            family: "Montserrat"
        }
    }

    return (
        <Line className='line-graph' data={data} options={options} />
    )
}

export default DailyVisits;