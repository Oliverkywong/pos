import React from 'react'
import logo from './logo.svg';

export default function Siderbar() {
    return (
        <div className='siderbar'>
            <div>
                <img src={logo} alt="logo" />
                <p>all</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>soup</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>salads</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>food</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <p>drinks</p>
            </div>
        </div>
    )
}
