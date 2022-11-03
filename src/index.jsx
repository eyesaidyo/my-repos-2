import React from 'react'
import {ErrorBoundary} from './ErrorBoundary'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
      	<App />
      </ErrorBoundary>
	
    </BrowserRouter>
	</React.StrictMode>
)