import React from 'react'
import './css/widget.css';
import { MdOutlineAccountBalanceWallet, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { AiOutlineLineChart, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';

export default function Widget(prop: { type: string }) {
  let data: {
    title: string;
    isMoney: boolean;
    link: string;
    icon: JSX.Element;
  } = {
    title: '',
    isMoney: false,
    link: '',
    icon: <></>,
  };

  const amount = 100;
  const diff = 20;

  switch (prop.type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <AiOutlineUser
            className="widget-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <AiOutlineShopping
            className="widget-icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <AiOutlineLineChart
            className="widget-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdOutlineAccountBalanceWallet
            className="widget-icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='widget-left'>
        <span className='widget-title'>{data.title}</span>
        <span className='widget-value'>
          {data.isMoney && "$"} {amount}
        </span>
        <span className='widget-link'>{data.link}</span>
      </div>
      <div className='widget-right'>
        <div className='widget-percentage positive'>
          <MdOutlineKeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}
