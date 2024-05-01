import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/c2/Home.jsx';
import Register from './Components/Register';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { myStore } from './Redux/Store/myStore.jsx';
import Logoutuser from './Components/Logoutuser.jsx';
import Additems from './Components/PutProduct/Additems.jsx';
import Toprated from './Components/Toprated.jsx';

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
          <Route path="/Additems" element={<Additems />} />
          <Route path="/Toprated" element={<Toprated />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
