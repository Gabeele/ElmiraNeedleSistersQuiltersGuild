import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './components/Gallery';
import Contact from './pages/Contact';
import Meetings from './pages/Meetings';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div id="home">
          <Home />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="meetings">
          <Meetings />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
