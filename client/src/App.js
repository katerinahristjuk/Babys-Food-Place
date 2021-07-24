import React from 'react';
// import { useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import './assets/index.css'

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
    import {Breakfast} from './components/Breakfast';
    import {Brunch} from './components/Brunch';
    import {Lunch} from './components/Lunch';
    import {Dinner} from './components/Dinner';
    import {Login} from './components/Login';
    import {Register} from './components/Register';
// import {MyProfile} from './components/MyProfile';
import {MyRecipes} from './components/MyRecipes';
    import { RecipeCreateEdit } from "./components/RecipeCreateEdit";
    import { RecipeView } from './components/RecipeView';

    
const App = () => {
    // const [currentId, setCurrentId] = useState('');
    // const dispatch = useDispatch();

    return(
        <div className='app'>
            <Header/>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/breakfast' component={Breakfast}/>
                <Route path='/brunch' component={Brunch}/>
                <Route path='/lunch' component={Lunch}/>
                <Route path='/dinner' component={Dinner}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/view' component={RecipeView}/>
                {/* <Route exact path='/:id' component={MyProfile}/> */}
                <Route exact path='/recipes' component={MyRecipes}/>
                {/* <Route exact path='/:id/recipes' component={MyRecipes}/> */}
                <Route exact path='/recipes/new' component={RecipeCreateEdit}/> 
                {/* <Route exact path='/:id/recipes/new' component={RecipeCreateEdit}/> */}
                {/* <Route exact path='/:id/recipes/:recipe-id' component={RecipeCreateEdit}/> */}
                <Route exact path='/recipes/:id' component={RecipeCreateEdit}/>
                
            </Switch> 
            
            <Footer/>
        </div>
    )
};

export default App;