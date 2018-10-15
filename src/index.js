import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Finish from './Components/Finish/Finish';
import Home from './Components/Home/Home';
import Question from './Components/Question/Question';
import Quiz from './Components/Quiz/Quiz';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' render={() => (
                <div>
                    <Home />
                </div>
            )} />
            <Route path='/Quiz' render={() => (
                <div>
                    <Quiz />
                </div>
            )} />
            <Route path='/Question' render={() => (
                <div>
                    <Question />
                </div>
            )} />
            <Route path='/Finish' render={() => (
                <div>
                    <Finish />
                </div>
            )} />
            <App />
        </Switch>
    </Router>
    , document.getElementById('root'));