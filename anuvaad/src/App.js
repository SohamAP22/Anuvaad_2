// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Translate from './components/Translate';
import VideoPlayer from './components/VideoPlayer';
import About from './components/About';
import Contact from './components/Contact';
import ReviewPage from './components/Review';
import './App.css';

function App() {
  const [translatedVideoPath, setTranslatedVideoPath] = useState(null);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/translate">Translate</Link></li>
            <li><Link to="/video-player">Video Player</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate setTranslatedVideoPath={setTranslatedVideoPath} />} />
          <Route path="/video-player" element={<VideoPlayer translatedVideoPath={translatedVideoPath} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;