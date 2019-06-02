import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import PageOne from './PagOne';
import PageTwo from './PageTwo';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/pageone" component={PageOne} />
            <Route exact path="/pagetwo" component={PageTwo} />
        </Switch>
    </BrowserRouter>
);

