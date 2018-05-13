import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './components/app';

const store = createStore((state, action) => state, {});

ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('app')
);
