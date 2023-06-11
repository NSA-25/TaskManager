import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/tasks" component={TasksPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
