import React from 'react';
import '../assets/index.css';
import {Link} from 'react-router-dom';

export function Register () {
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
                    <ul>
                        <li><Link to="/:id">My Profile</Link></li>
                        <li><Link to="/recipes">My Recipes</Link></li>
                        <li><Link to="/">Log Out</Link></li>
                        <li><Link to="/recipes/new">New Recipe</Link></li>
                        <li><Link to="/recipes/:id">Edit My Recipe</Link></li>
                        <li><Link to="/view">View Recipe</Link></li>
                    </ul>
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