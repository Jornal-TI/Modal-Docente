import React, { useEffect, useState } from 'react';
import Logo from '../../icons/logo.png'
import './Header.css'
export default function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">
            <div className='data'>
                <img className='logo' src={Logo} ></img>
                <h1>Docente</h1>
                <p>{currentDate}</p>
            </div>

        </div>
    )
}