import React from 'react';
import './App.css';
import ReactEcharts from "echarts-for-react";

function App() {
  const colors = ['#5470C6', '#91CC75', '#EE6666'];

  const option = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['subscriber gained', 'subscriber losts', 'sum of net subscriber gained']
    },
    xAxis: [
      {
        type: 'category',
        data: ['w14', 'w15', 'w16', 'w17', 'w18', 'w19', 'w20', 'w21', 'w22', 'w23', 'w24', 'w25', 'w26', 'w27', 'w28', 'w29', 'w30', 'w31', 'w32', 'w33', 'w34', 'w35', 'w36', 'w37', 'w38'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        min: -1000,
        max: 7000,
        interval: 1000,
        axisLabel: {
          formatter: '{value} '
        }

      },
    ],
    series: [
      {
        name: 'subscriber gained',
        type: 'bar',
        stack: 'total',
        tooltip: {
          valueFormatter: function (value: any) {
            return value ;
          }
        },
        data: [
          1000, 2000, 2500, 3000, 3500, 2000, 3000, 5000, 4000, 3000, 1000, 2500, 3000, 3500, 4000, 5000, 3000, 4000, 3500, 2000, 3500, 3000, 1000, 4000, 3000,
        ],
      },
      {
        name: 'subscriber losts',
        type: 'bar',
        stack: 'total',
        data: [
          -100, -200, -100, -200, 100, -200, -100, -300, -300, -200, -400, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500, -500,
        ],
        position: 'left'
      }
      ,
      {
        name: 'sum of net subscriber gained',
        type: 'line',
        tooltip: {
          valueFormatter: function (value: any) {
            return value;
          }
        },
        data: [1000, 2000, 2500, 3000, 3500, 2000, 3000, 5000, 4000, 3000, 1000, 2500, 3000, 3500, 4000, 5000, 3500, 4000, 3500, 2000, 3500, 3000, 1000, 4000, 3000,]
      }
    ]

  };

  return (
    <>
      <div>
        <div className="head" style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Weelkly Subscriber Gain and Loss</h1>
        </div>
        <div className="sub-head" style={{ display: 'flex', justifyContent: 'center', marginBottom:'23px' }}>
          <span style={{ backgroundColor: '#80808070', padding: '10px' }}>Takeway: Majority of Subscribers are gained in spike (viral) events that mostly occurred in Apr - jun' 22</span>
        </div>
      </div>
      {/* <Chart /> */}
      <ReactEcharts option={option} />
    </>
  );
}

export default App;
