import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/charts/Chart';
import List from '../../components/table/Table';

function Single() {
  return (
    <div className='single'>
     <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left"> 
          <div className="edithButton">Edit</div>
            <h1 className='title'>Informations</h1>
            <div className="item">
              <img src="https://www.senenews.com/madame/wp-content/uploads/2022/03/Marie-Paule-Adje-Jessica-Afriseries_1162-1-e1633392615504.jpg" alt="" className='itemImg'/>
              <div className="details">
                <h1 className="itemTitle">Marie Paule Adje </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> mariepauleadje@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +225 0707918551</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue"> Abidjan Cocody</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"> Côte d'Ivoire</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className='title'>Last transactions</h1>
          <List />
        </div>
      </div>

    </div>
  )
}

export default Single