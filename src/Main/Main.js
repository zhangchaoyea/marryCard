import React from 'react'
import './Main.css'

const Main = React.forwardRef((props, ref) => (
  <header className="header">
    <h3 className="head_h3">我们结婚啦</h3>
    <ul className="names">
        <li>张超</li>
        <li>
          <span className="circle">&amp;</span>
        </li>
        <li>刘小钗</li>
    </ul>
    <div className="date">
      <span className="date_year">2020年</span>
      <span className="date_month">正月初四</span>
      <span className="date_day"></span>
      <div className="time">
        6:00
        <span className="sub_time">下午</span>
      </div>
    </div>
  </header>
))

export default Main
