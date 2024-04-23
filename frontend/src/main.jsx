import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { myStore, persistor } from "./Redux/Store/myStore.jsx"; // Assuming you have configured your Redux store with Redux Toolkit and Redux Persist
import App from './App.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
