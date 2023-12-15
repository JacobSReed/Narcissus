import React, { useEffect } from 'react';
import logo from './Resources/Jacob_Headshot.jpg';
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
        <h1>Jacob Reed</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's me, ya boy
        </p>
        <a
        className='App-link'
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
        rel='noopener noreferrer'
        >
          Try this page and /rick, or click this
        </a>
      </header>
    </div>
  );
}

export default App;
