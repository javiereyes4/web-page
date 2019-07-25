import React from '../../../node_modules/react';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery'
import CardBio from '../CardBio/CardBio'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="containerAll">
      <Header />
      <div className="gallery">
        <Gallery />
      </div>
      <div>
        <CardBio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
