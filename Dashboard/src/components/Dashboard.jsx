import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Order from './Order';
import Holding from './Holding';
import Position from './Position';
import Funds from './Funds';
import Apps from './Apps';
import Summary from './Summary';
import WatchList from './WatchList';
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList/>
    <div className='content'>
      <Routes>
       <Route exact path="/" element={<Summary />} />
          <Route path="/order" element={<Order/>} />
          <Route path="/holding" element={<Holding />} />
          <Route path="/position" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
      </Routes>
    </div>
    </div>
  )
}

export default Dashboard
