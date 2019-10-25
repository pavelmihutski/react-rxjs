import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

const store = createStore(rootReducer, enhancer);
 
epicMiddleware.run(rootEpic);

export default store;


