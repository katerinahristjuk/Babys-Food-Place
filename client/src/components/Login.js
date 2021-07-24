import React from 'react';
import '../assets/index.css';

export function Login () {
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
                {/* <div className='loginForm'> */}
                    <form className='form'>
                        <p>Email</p>
                        <input type='email' className='input' placeholder='user@domain.com'></input>
                        <p>Password</p>
                        <input type='password' className='input' placeholder='**********'></input>
                        <br/><br/>
                        <button className='greenBtn'>LOG IN</button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    )
}