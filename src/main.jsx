import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../Scss-dist/style.css'
import Footer from './component/Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <footer/>
  </React.StrictMode>,
)
