import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Redux/Action/actionTypes';
const Logoutuser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const user = useSelector((state) => state.user);
  console.log(user.name);
  const handlelogout = () =>{
    navigate("/login")
    dispatch(Logout());
    localStorage.removeItem('user');
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>YOU HAVE BEEN LOGGED OUT!</h1>
      {user && <p>Logged out user: {user.name}</p>}
      <button onClick={handlelogout}>GO TO LOGIN PAGE</button>
    </div>
    
  );
};

export default Logoutuser;
