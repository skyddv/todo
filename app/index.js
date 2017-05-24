import React from 'react';
import ReactDOM from 'react-dom';
import App from './app_bak';
import createStore from 'redux/lib/createStore';
import rootReducer from './reducers';
import Provider from 'react-redux/lib/components/Provider';


const root = document.getElementById("root");
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, root);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer)
    })
}