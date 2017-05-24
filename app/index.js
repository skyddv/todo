import React from 'react';
import ReactDOM from 'react-dom';
import App from './app_bak';
import createStore from 'redux/lib/createStore';
import rootReducer from './reducers';
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from  'redux/lib/applyMiddleware';
import thunkMiddleware from  'redux-thunk'


const root = document.getElementById("root");
const cswm = applyMiddleware(
    thunkMiddleware
)(createStore)
const store = cswm(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, root);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer)
    })
}