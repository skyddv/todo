import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './app_bak'

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept('./app_bak', () => {
        const Nextapp = require('./app_bak');
        ReactDOM.render(
            <AppContainer>
                <Nextapp />
            </AppContainer>,
            root
        )
    })
}