import React from 'react';
import {Link} from 'react-router-dom';

export function Footer () {
    return(
        <footer className='footer'>
            <button id='footerLogo'><Link to='/' className='footerLink'>Home</Link></button>
            <div className='footerNav'>
            <ul>
                <li className='footerNav'><Link to='/breakfast' className='footerLink'>BREAKFAST</Link></li>
                <span className='footerOr'>o</span>
                <li className='footerNav'><Link to='/brunch' className='footerLink'>BRUNCH</Link></li>
                <span className='footerOr'>o</span>
                <li className='footerNav'><Link to='/lunch' className='footerLink'>LUNCH</Link></li>
                <span className='footerOr'>o</span>
                <li className='footerNav'><Link to='/dinner' className='footerLink'>DINNER</Link></li>
            </ul>
            </div>
            <div className='footerC'>
                <span >Baby`s Food Place</span><br/>
                <span>copyright 2021</span>  
            </div>
        </footer>
    )
}