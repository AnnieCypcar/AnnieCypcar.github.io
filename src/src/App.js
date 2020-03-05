import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="logo">
        <img src="assets/cypcar_logo_2020_nocr.png" alt="cypcar logo" />
      </div>
      <div id="content">
        <div className="title">
          hello from cypcar design
        </div>
        <a href={`mailto:cypcardesign@gmail.com`}>
          <div className="contact">
            drop me a line
          </div>
        </a>
        <footer>@{new Date().getFullYear()} cypcar design</footer>
      </div>
      
    </div>
  );
}

export default App;
