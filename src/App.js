import React,{useEffect} from 'react';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { Bar, Line, Pie } from 'react-chartjs-2';
import GaugeChart from 'react-gauge-chart'
import GaugeComponent from 'react-gauge-component'
import './App.css' 
Chart.register(CategoryScale);
const App = () => { 
  // Data for the bar chart
  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  // Data for the line chart 
  let data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Line 1',
            data: [10, 20, 15, 30, 25],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Line 2',
            data: [5, 15, 10, 25, 20],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false
        }
    ]
};

// Define chart configuration
let config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
};
  // Data for the pie chart
  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="App">
      <div className='gaugeGrid '>
      <GaugeComponent 
    type="radial" 
    pointer={{
   color: '#345243',
   length: 0.80,
   width: 15,
   // elastic: true,
 }}
  className='gagueComp canvasHidden'
     arc={{
   subArcs: [
     {
       limit: 0,
       color: '#00cc00',
       showTick: true
     }, 
     {
       limit: 35,
       color: '#F5CD19',
       showTick: true
     },
     {
       limit: 100,
       color: '#5BE12C',
       showTick: true
     },
   ]
 }}

    
 value={35}  />
      <GaugeComponent
    
    type="radial" 
    pointer={{
   color: '#345243',
   length: 0.80,
   width: 15,
   // elastic: true,
 }}
  className='gagueComp'
     arc={{
   subArcs: [
     {
       limit: 0,
       color: '#00cc00',
       showTick: true
     }, 
     {
       limit: 35,
       color: '#F5CD19',
       showTick: true
     },
     {
       limit: 100,
       color: '#5BE12C',
       showTick: true
     },
   ]
 }}

   
 
 value={35}  />
   <GaugeComponent
    
    type="radial" 
    pointer={{
   color: '#345243',
   length: 0.80,
   width: 15,
   // elastic: true,
 }}
  className='gagueComp'
     arc={{
   subArcs: [
     {
       limit: 0,
       color: '#00cc00',
       showTick: true
     }, 
     {
       limit: 60,
       color: '#F5CD19',
       showTick: true
     },
     {
       limit: 100,
       color: '#5BE12C',
       showTick: true
     },
   ]
 }}

   
 
 value={60}  />
   <GaugeComponent
    
    type="radial" 
    pointer={{
   color: '#345243',
   length: 0.80,
   width: 15,
   // elastic: true,
 }}
  className='gagueComp'
     arc={{
   subArcs: [
     {
       limit: 0,
       color: '#00cc00',
       showTick: true
     }, 
     {
       limit: 80,
       color: '#F5CD19',
       showTick: true
     },
     {
       limit: 100,
       color: '#5BE12C',
       showTick: true
     },
   ]
 }}

   
 
 value={80}  />
   <GaugeComponent
    
     type="radial" 
     pointer={{
    color: '#345243',
    length: 0.80,
    width: 15,
    // elastic: true,
  }}
   className='gagueComp'
      arc={{
    subArcs: [
      {
        limit: 0,
        color: '#00cc00',
        showTick: true
      }, 
      {
        limit: 20,
        color: '#F5CD19',
        showTick: true
      },
      {
        limit: 100,
        color: '#5BE12C',
        showTick: true
      },
    ]
  }}

    
  
  value={20}  />
      </div>
      
      <div className="chart-container firstChart"> 
        <Bar data={barChartData} />
      </div>
      <div className="chart-container"> 
        <Line data={data} />
      </div>   
    </div>
  );
};

export default App;
