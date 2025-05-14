import React, { useState } from 'react';
import '../../Assets/Styles/AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/Techblog/AdminLogin", { username, password })
      .then((response) => {
        localStorage.setItem("isAdminLoggedIn", true);
        navigate('/dashboard');
      })
      .catch((error) => {
        setError("Invalid username or password.");
      });
  };

  return (
    <div className="techblog-admin-login-container">
      <form onSubmit={handleSubmit} className="techblog-admin-login-form">
        <h2 className="techblog-admin-login-title">Admin Login</h2>
        
        {error && (
          <p className="techblog-admin-login-error">{error}</p>
        )}

        <div className="techblog-admin-input-group">
          <label htmlFor="techblog-username" className="techblog-admin-label">
            Username
          </label>
          <input
            type="text"
            id="techblog-username"
            className="techblog-admin-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="techblog-admin-input-group">
          <label htmlFor="techblog-password" className="techblog-admin-label">
            Password
          </label>
          <input
            type="password"
            id="techblog-password"
            className="techblog-admin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="techblog-admin-login-button"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
