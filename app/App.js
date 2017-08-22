import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect, browserHistory } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import Search from './containers/Search';
import Detail from './containers/Detail';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route path='/home' component={Home}/>
                <Route path='/search/:book?' component={Search}/>
                <Route path='/details/:id' component={Detail}/>
                <Route path='/404' component={NotFound}/>
                <Redirect from='*' to='/404'/>
            </Switch>
        </div>
    </Router>
);

export default App;
