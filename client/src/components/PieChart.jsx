import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS} from 'chart.js/auto';


const styles = {
    width: 200,
    height: 200,
    position: "absolute",
    left:"40px",
    padding: "20px",
    top: "20em"   
}


function PieChart({ chartData }) {
  

  return (
    <div style={styles}>
      <Pie data={chartData} className="chart"/>
    </div>
  )
}

export default PieChart