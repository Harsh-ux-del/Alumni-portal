import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Alumni from '../pages/Alumni';
import Students from '../pages/Students';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/alumni" component={Alumni} />
                <Route path="/students" component={Students} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;