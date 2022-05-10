import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { EventContextProvider } from './store/labeledEvents-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EventContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </EventContextProvider>
);
