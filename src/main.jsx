// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client' //react dom objects provides methods for interacting with browser dom  //client side means user-sed
//in simple it takes to and display to the browser


import App from './App.jsx' //app is helps to shwcontent , slidebar, naviagation bw pages 
import './index.css'
import { ToastProvider } from './components/ui/ToastContext'; // <-- ADD THIS IMPORT

ReactDOM.createRoot(document.getElementById('root')).render( //it will render everything from index.html to browser
  <React.StrictMode> 
    <ToastProvider> {/* <-- WRAP APP WITH TOASTPROVIDER */}
      <App />
    </ToastProvider> {/* <-- CLOSE TOASTPROVIDER */}
  </React.StrictMode>,
)

//React.StrictMode = this is react devolpment tool that helps to wrte better react code , it activates some additional checks and warnings