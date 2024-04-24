import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { myStore } from './Redux/Store/myStore.jsx';
import Logoutuser from './Components/Logoutuser.jsx';

const App = () => {
  return (
    <div>
    <Provider store= { myStore }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Logoutuser" element={<Logoutuser />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
