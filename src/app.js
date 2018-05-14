import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'
// import registerServiceWorker from './registerServiceWorker';
import Main from '../src/components/Main/main'


const store = configureStore();
const state = store.getState();
const AppRoute = (
    <Provider store={store} /*provider  take all the current state to the app wherever it is needed  */>
        <Main/>
    </Provider>
)

ReactDOM.render(AppRoute, document.getElementById('app'));


