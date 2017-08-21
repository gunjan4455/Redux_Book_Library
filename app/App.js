import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Library from './containers/Library';
import Search from './containers/Search';
import Detail from './containers/Detail';
import NotFound from './components/NotFound';
import  'styles/bootstrap.css';
import  'styles/style.css';

const App = () => (
    <Router>
        <div>
            <div>
                <Header/>
                <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Route path='/home' component={Library}/>
                    <Route path='/details/:id' component={Detail}/>
                    <Route path='/search/:book' component={Search}/>
                    <Route path='/404' component={NotFound}/>
                    <Redirect from='*' to='/404'/>
                </Switch>
            </div>
        </div>
    </Router>
)

export default App
