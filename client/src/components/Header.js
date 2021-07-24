import React from 'react';
import {Link} from 'react-router-dom';

export function Header () {
    return(
        <header className='header'>
            <button className='headerLogo'><Link to='/' className='headerLink' id='homeBtn'>___________________</Link></button>
            <ul>
                <li className='headerNav'><Link to='/breakfast' className='headerLink'>BREAKFAST</Link></li>
                <span className='headerOr'>o</span>
                <li className='headerNav'><Link to='/brunch' className='headerLink'>BRUNCH</Link></li>
                <span className='headerOr'>o</span>
                <li className='headerNav'><Link to='/lunch' className='headerLink'>LUNCH</Link></li>
                <span className='headerOr'>o</span>
                <li className='headerNav'><Link to='/dinner' className='headerLink'>DINNER</Link></li>
            </ul>
            {/* <button className='loginBtn'><Link to='/login' className='headerLink'>LOG IN</Link></button> */}
            <button className='loginBtn'><Link to='/recipes' className='headerLink'>MY RECIPES</Link></button>
            <span className='headerOr'>or</span>
            <button className='registerBtn'><Link to='/recipes/new' className='headerLink'>CREATE NEW</Link></button>
            <button className='registerBtn'><Link to='/recipes/:id' className='headerLink'>EDIT RECIPE</Link></button>
            <button className='registerBtn'><Link to='/register' className='headerLink'>REGISTER</Link></button>
        </header>
    )
}