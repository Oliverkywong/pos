import React from 'react'
import logo from './logo.svg';

export default function Siderbar() {
    return (
        <div className='siderbar'>
            <div>
                <img src={logo} alt="logo" />
                <p>starters</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>salads</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>main</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>desserts</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>drinks</p>
            </div>
        </div>
    )
}
