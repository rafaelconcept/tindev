import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login.js';
import Main from './pages/Main.js';

export default function Routes(){

    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );

}