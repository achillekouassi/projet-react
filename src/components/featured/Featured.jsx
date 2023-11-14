import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredCart">
                <CircularProgressbar value={20} text={'20%'} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$2500</p>
            <p className="desc">Previous transactions processing. Last payments may not be includes</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardControlKeyOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardControlKeyOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.k</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Featured