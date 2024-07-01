import React from "react";
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import './styles/index.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);