import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    window
      .fetch('http://localhost:8080/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
