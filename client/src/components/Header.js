import React from 'react';
import {Link} from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export function Header () {

    // const loggedUser = useSelector(state => state.UsersReducer.users)
    // const userId = loggedUser._id;
    // ili
    // const { userId } = useParams();

    // const user = null;



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
            <button className='loginBtn'><Link to='/recipes' className='headerLink'>MY RECIPES</Link></button>
            <span className='headerOr'>or</span>
            <button className='registerBtn'><Link to='/:userId/myProfile' className='headerLink'>MY PROFILE</Link></button>
            <button className='registerBtn'><Link to='/register' className='headerLink'>REGISTER</Link></button>
            <button className='loginBtn'><Link to='/login' className='headerLink'>LOG IN</Link></button>

            {/* {user ?
            <div>
                <button className='loginBtn'><Link to='/recipes' className='headerLink'>MY RECIPES</Link></button>
                <span className='headerOr'>or</span>
                <button className='registerBtn'><Link to='/:userId/myProfile' className='headerLink'>MY PROFILE</Link></button>
            </div>:
            <div>
                <button className='registerBtn'><Link to='/register' className='headerLink'>REGISTER</Link></button>
                <button className='loginBtn'><Link to='/login' className='headerLink'>LOG IN</Link></button>
            </div>
            } */}
            

            {/* {(!userId) ?  
            <button className='loginBtn'><Link to='/login' className='headerLink'>LOG IN</Link></button>:
            <button className='loginBtn'><Link to='/:userId/myProfile' className='headerLink'>MY PROFILE</Link></button>}

            <span className='headerOr'>or</span>

            {(!userId) ?  
            <button className='registerBtn'><Link to='/register' className='headerLink'>REGISTER</Link></button>:
            <button className='loginBtn'><Link to='/recipes' className='headerLink'>MY RECIPES</Link></button>}
            */}
        </header>
    )
}