import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './main/app'
import promise from 'redux-promise'
import reducers from './main/Reducers'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('app'))