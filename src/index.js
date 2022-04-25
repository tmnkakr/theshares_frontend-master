import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
ReactDom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById('root')
)
