import React, { useState } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/UserActions';
// import { Redirect } from 'react-router-dom';
import FileBase from 'react-file-base64';

export function MyProfile () {

    const loggedUser = useSelector(state => state.UsersReducer.users);
    // const token = useSelector(state => state.UsersReducer.token);

    const [user, setUser] = useState(loggedUser);
    // const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = user.id;
        dispatch(updateUser(userId, user));
        // setRedirect(true);
    }

    // if(redirect) {
    //     return <Redirect to={`/${user._id}/myProfile`}/>
    // }

    return(
        <div id="myProfile">
            <div className='h2'>My Profile</div>
                <div className='formBody'>
                    <div className='formAvatar'>
                        <img src={user.avatar} alt="Avatar" className="avatar"/>
                        <div><FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setUser({ ...user, avatar: base64 })}/></div>
                    </div>
                    <div>
                    <form className='form'>
                        <p>First Name</p>
                        <input 
                            type='text' 
                            placeholder='John'
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            ></input>
                        <p>Email</p>
                        <input 
                            type='email' 
                            placeholder='john@smith.com'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            ></input>
                        <p>Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            ></input>
                        <br/><br/>
                        <button className='greenBtn' onClick={handleSubmit}>UPDATE ACCOUNT</button>
                    </form> 
                    </div>
                    <div>
                    <form className='form'>
                        <p>Last Name</p>
                        <input 
                            type='text' 
                            placeholder='Smith'
                            value={user.lastName}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            ></input>
                        <p>Birthday</p>
                        <input 
                            type='date'
                            value={user.birthday}
                            onChange={(e) => setUser({ ...user, birthday: e.target.value })}
                            ></input>
                        <p>Repeat Password</p>
                        <input 
                            type='password' 
                            placeholder='**********'
                            value={user.repeatPassword}
                            onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
                            ></input>
                    </form>
                    </div>
                </div>
        </div>
    )
}
