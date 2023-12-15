import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const url = window.location.pathname.toLowerCase();
    // Check if the current URL is /QR
    if (url.includes('/qr')) {
      // Redirect to the main page
      window.location.href = '/';
    }
    if (url.includes('/rick')) {
      // Redirect to the main page
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
