import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loginuser } from '../Redux/Action/actionTypes';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const initialFormValues = { email: '', password: '' };
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(Loginuser(formValues));
      navigate("/");
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <div className="text-danger">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
