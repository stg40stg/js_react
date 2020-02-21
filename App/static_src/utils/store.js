import { createStore, applyMiddleware } from 'redux';
import initReducers from './../reducers';
import messageMiddleware from '../middleWares/messageMiddleware.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer'],
};

export const history = createBrowserHistory();

function initStore() {
    const innitialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), messageMiddleware)
        )
    );

    const persistor = persistStore(store);

    return {store, persistor};
}

export default initStore;