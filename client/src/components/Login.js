import React, { useState } from 'react';
import '../assets/index.css';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

export function Login () {
    

    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        birthday: '',
        avatar: '' 
    });

    const userLogged = useSelector(state => state.UsersReducer.users);

    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login(user));
 
        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to={`/${userLogged._id}/myProfile`}/>
    }

    return(
        <div id="login">
            <div className='h2'>Log In</div>
            <div className='formBody'>
                <div className='formText'>
                    <h2 className='orangeHeader'>Welcome to <span style={{color:"gray"}}>Baby`s</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Curabitur ut dui ac risus auctor ornare. 
                        Nam congue ligula quis venenatis auctor. Praesent 
                        justo risus, aliquet eu elit id, sollicitudin pharetra 
                        lacus. Aenean feugiat hendrerit dolor, ullamcorper 
                        sollicitudin mi ullamcorper id. Nulla vel tortor sapien. 
                        Proin tristique erat bibendum felis sollicitudin finibus. 
                        Integer ut euismod risus, in semper nisl. Nam congue pharetra aliquet.</p>
                </div>
                    <form className='form'>
                        <p>Email</p>
                        <input 
                            type='email' 
                            className='input' 
                            placeholder='user@domain.com'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                            ></input>
                        <p>Password</p>
                        <input 
                            type='password' 
                            className='input' 
                            placeholder='**********'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            ></input>
                        <br/><br/>
                        <button className='greenBtn' onClick={handleSubmit}>LOG IN</button>
                    </form>
            </div>
        </div>
    )
}