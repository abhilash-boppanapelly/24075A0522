import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/fibonacci">Fibonacci Generator</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="*" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
