import React from 'react';
import '../assets/index.css';

export function MyProfile () {
    return(
        <div id="myProfile">
            <div className='h2'>My Profile</div>
                <div className='formBody'>
                    <div className='formAvatar'>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" class="avatar"/>
                        <button className='greenBtn'>CHANGE AVATAR</button>
                    </div>
                    <div>
                    <form className='form'>
                        <p>First Name</p>
                        <input type='text' placeholder='John'></input>
                        <p>Email</p>
                        <input type='email' placeholder='john@smith.com'></input>
                        <p>Password</p>
                        <input type='password' placeholder='**********'></input>
                        <br/><br/>
                        <button className='greenBtn'>CREATE ACCOUNT</button>
                    </form> 
                    </div>
                    <div>
                    <form className='form'>
                        <p>Last Name</p>
                        <input type='text' placeholder='Smith'></input>
                        <p>Birthday</p>
                        <input type='date'></input>
                        <p>Repeat Password</p>
                        <input type='password' placeholder='**********'></input>
                    </form>
                    </div>
                </div>
        </div>
    )
}