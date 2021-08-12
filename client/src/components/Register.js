import React, { useState } from 'react';
import '../assets/index.css';
import { Redirect} from 'react-router-dom';
import { register } from '../actions/UserActions';
import { useDispatch } from 'react-redux';

export function Register () {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        birthday: '',
        avatar: '' 
    });
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(user));
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to='/login'/>
    }
    
    return(
        <div id="register">
            <div className='h2'>Register</div>
                <div className='formBody'>
                    <div className='formText'>
                        <h2 className='orangeHeader'>Create your <span style={{color:"gray"}}>account</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Curabitur ut dui ac risus auctor ornare. 
                        Nam congue ligula quis venenatis auctor. Praesent 
                        justo risus, aliquet eu elit id, sollicitudin pharetra lacus.</p>
                    </div>
                    <div>
                    <form className='form'>
                        <p>First Name</p>
                        <input 
                            type='text' 
                            placeholder='John'
                            value={user.firstName}
                            onChange={(e) => setUser({...user, firstName: e.target.value})}
                            ></input>
                        <p>Email</p>
                        <input 
                            type='email' 
                            placeholder='john@smith.com'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}                            
                            ></input>
                        <p>Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}                            
                            ></input>
                        <br/><br/>
                        <button className='greenBtn' onClick={handleSubmit}>CREATE ACCOUNT</button>
                    </form> 
                    </div>
                    <div>
                    <form className='form'>
                        <p>Last Name</p>
                        <input 
                            type='text' 
                            placeholder='Smith'
                            value={user.lastName}
                            onChange={(e) => setUser({...user, lastName: e.target.value})}                            
                            ></input>
                        <p>Birthday</p>
                        <input 
                            type='date'
                            value={user.birthday}
                            onChange={(e) => setUser({...user, birthday: e.target.value})}                            
                            ></input>
                        <p>Repeat Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.repeatPassword}
                            onChange={(e) => setUser({...user, repeatPassword: e.target.value})}                            
                            ></input>
                    </form>
                    </div>
                </div>
        </div>
    )
}