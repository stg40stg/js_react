import React from 'react';
import ReactDOM from 'react-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from "./layout.jsx";


ReactDOM.render(
    <MuiThemeProvider>
        <Layout/>
    </MuiThemeProvider>,
    document.getElementById('root')
);

