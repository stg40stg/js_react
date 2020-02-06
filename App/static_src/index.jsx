import React from 'react';
import ReactDOM from 'react-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from "react-router-dom";
import Router from './router.jsx'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router/>
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

