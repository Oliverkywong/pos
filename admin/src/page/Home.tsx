import React from 'react'
import './css/home.css';
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import Widget from '../component/Widget';
import Featured from '../component/Featured';
import Chart from '../component/Chart';
import OrderList from '../component/OrderList';

export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='body'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart  title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="orderTable">
                    <div className="ordertableTitle">
                        Top Sales
                    </div>
                    <OrderList />
                </div>
            </div>
        </div>
    )
}
