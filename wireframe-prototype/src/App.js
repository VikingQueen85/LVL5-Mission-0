import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ImagesSection from './components/ImagesSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="top-section">
          <p className="top-text">Whether navigating life transitions, seeking relief from physical or emotional pain, or simply striving for a deeper sense of well-being, our personalized healing packages are your gateway to peace, balance, and rejuvenation.</p>"
          <SearchSection />
        </div>
        <div className="bottom-section">
          <ImagesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
