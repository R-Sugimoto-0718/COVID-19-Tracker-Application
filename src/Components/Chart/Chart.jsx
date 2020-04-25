import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
useEffect(() => {
  const fetchAPI = async () => {
    setDailyData(await fetchDailyData());
  }

  fetchAPI();
}, []);

const lineChart = (
  dailyData.length 
  ? (
  <Line
    data={{
      labels: dailyData.map(({ date }) => date),
      datasets: [{
        data: dailyData.map(({ confirmed }) => confirmed),
        label: '感染者',
        borderColor: 'rgb(132,106,181)',
        fill: true
      }, {
        data: dailyData.map(({ deaths }) => deaths),
        label: '死者',
        borderColor: 'red',
        backgroundColor: 'rgb(250,70,96)',
        fill: true
      }],
    }}
    />) : null
)


  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;