import React from 'react'
import './css/featured.css'
import { AiOutlineMore } from 'react-icons/ai'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function Featured() {
    return (
        <div className='featured'>
            <div className='featuredTop'>
                <span className="featuredTitle">Total Revenue</span>
                <AiOutlineMore fontSize="x-large" />
            </div>
            <div className='featuredBottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={75} text={`${75}%`} />
                </div>
                <p className="progressbartitle">Total sale made today</p>
                <span className="progressbarAmount">$420</span>
                <p className="progressbarDesc">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdOutlineKeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <MdOutlineKeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <MdOutlineKeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}
