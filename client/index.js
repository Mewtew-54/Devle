import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Home from './components/Home.jsx';
import attemptsReducer from './state/index.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const store = configureStore({
	reducer: attemptsReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Provider store={store}>
			<App />
		</Provider>
	</>
);
