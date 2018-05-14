import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/app';
import { Provider } from 'react-redux'
import configureStore from './'
import AppRouter from './routers/Approuter'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const state = store.getState();
const AppRoute = (

<Provider store={store} /*provider  take all the current state to the app wherever it is needed  */>
<App/>
</Provider>
)

ReactDOM.render(Approute, document.getElementById('root'));
registerServiceWorker();
