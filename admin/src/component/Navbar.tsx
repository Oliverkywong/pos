import React from 'react'
import './css/navbar.css'
import { AiOutlineSearch, AiOutlineUnorderedList } from 'react-icons/ai'
import { MdChatBubbleOutline, MdFullscreenExit, MdLogout, MdNotificationsNone, MdOutlineDarkMode, MdOutlineLanguage } from 'react-icons/md'
import { useAppDispatch } from '../store';

export default function Navbar() {
  const dispatch = useAppDispatch();
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                    <AiOutlineSearch />
                </div>
                <div className="items">
          <div className="item">
            <MdOutlineLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode
              className="icon"
              onClick={() => dispatch({ type: "@@darkmode/TOGGLE_DARKMODE" })}
            />
          </div>
          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AiOutlineUnorderedList className="icon" />
          </div>
          <div className="item">
            <MdLogout className="icon" />
          </div>
        </div>
            </div>
        </div>
    )
}
