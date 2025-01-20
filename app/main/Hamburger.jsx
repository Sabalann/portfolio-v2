"use client"
import { useState } from 'react'


export default function Hamburger() {
    const [menuActive, setMenuActive] = useState(false)

    function handleClick() {
        setMenuActive(!menuActive)
    }

    return (
        <div className='hamburger'>
            <div className={`off-screen-menu ${menuActive ? 'active' : ''}`}>
                    <span>Home</span>
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
            </div>
            <nav>
                <div className={`ham-menu ${menuActive ? 'active' : ''}`} onClick={handleClick}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </nav>
        </div>
    );
}