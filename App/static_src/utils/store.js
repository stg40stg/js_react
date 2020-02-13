import { createStore, compose } from 'redux';
import initReducers from './../reducers';


function initStore() {
    const innitialStore = {};
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(
        initReducers,
        innitialStore,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default initStore;