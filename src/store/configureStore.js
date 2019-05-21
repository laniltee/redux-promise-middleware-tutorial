import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(promise, logger)
    );
};

export default configureStore();
