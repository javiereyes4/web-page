import React from '../../../node_modules/react';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
