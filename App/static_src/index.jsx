import React from 'react';
import ReactDOM from 'react-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router.jsx';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store.js';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router/>
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

