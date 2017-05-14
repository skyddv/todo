import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './app'

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept('./app', () => {
        const Nextapp = require('./app');
        ReactDOM.render(
            <AppContainer>
                <Nextapp />
            </AppContainer>,
            root
        )
    })
}