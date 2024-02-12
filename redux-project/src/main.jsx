import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserRedcucer from './assets/UserRedcucer.jsx';

// Import your reducers or createSlice here

const store = configureStore({
  reducer: {
    // Add your reducers here
       users : UserRedcucer
  }

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
