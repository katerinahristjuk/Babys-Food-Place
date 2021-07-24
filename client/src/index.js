import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'; //to acces useState from anywhere
import Store from './Store'; //keeps the States

ReactDOM.render(
    <Provider store={Store}> 
        <Router>
            <Route path='/' component={App}/>
        </Router>
    </Provider>
,
    document.getElementById('root')
);