import React from 'react';
import ReactDOM from 'react-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from "react-router-dom";
import Router from './router.jsx';
import { Provider } from 'react-redux';
import initStore from './utils/store.js';

ReactDOM.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

