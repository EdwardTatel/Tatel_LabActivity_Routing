import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [users] = useState([
    { userName: "admin123", passWord: "admin123" },
    { userName: "Edward", passWord: "Tatel123" },
    { userName: "Hybrid", passWord: "Programming" },
    { userName: "", passWord: "" },
  ]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = () => {
    const user = users.find(user => user.userName === username && user.passWord === password);
    if (user) {
      onLoginSuccess();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-modal">
      <div className="modal">
        <h1>Login</h1>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button onClick={checkCredentials}>Login</button>
        <br /><br />
      </div>
    </div>
  );
}

export default Login;
