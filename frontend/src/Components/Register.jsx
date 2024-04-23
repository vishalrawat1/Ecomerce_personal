import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Registeruser } from '../Redux/Action/actionTypes';

const Register = () => {
  const initialValue = { name: "", email: "", password: "", phone: "", address: "" };
  const [formData, setFormData] = useState(initialValue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Registeruser(formData));
    navigate("/login");
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          name="name"
          className="form-control"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          name="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          name="phone"
          className="form-control"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          name="address"
          className="form-control"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Register;
