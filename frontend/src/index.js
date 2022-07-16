import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './Register';
import Login from './Login';
import Registerrr from './Registerrr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Registerrr />
        <Login />
        <Register />
    </React.StrictMode>
);
