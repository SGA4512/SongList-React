import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducres from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducres)}>
    <App />
    </Provider>,
    document.querySelector("#root")
)