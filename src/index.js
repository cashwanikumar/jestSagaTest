import React from 'react';
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import rootSaga from './container/AppContainer/sagas'
import App from './container/AppContainer/App';

import reducer from './container/AppContainer/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
