import React from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  return (
    <>
      <div>
        <div className="head">
          <h1>Weelkly Subscriber Gain and Loss</h1>
        </div>
        <div className="sub-head">
          Takeway: Majority of Subscribers are gained in spike (viral) events that mostly occurred in Apr - jun' 22
        </div>
      </div>
      <Chart />
    </>
  );
}

export default App;
