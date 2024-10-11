// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1 className="big-font">Welcome to Anuvaad</h1>
      <p className="medium-font">Breaking Language Barriers in Video Content</p>
      <p>Anuvaad is your go-to solution for translating audio and subtitles in English videos to multiple languages. Our cutting-edge technology ensures accurate and seamless translations, opening up your content to a global audience.</p>
      <Link to="/translate">
        <button>Get Started</button>
      </Link>

      <h2>Features</h2>
      <div className="features">
        <div>
          <h3>🎥 Video Translation</h3>
          <p>Translate both audio and subtitles in your videos with high accuracy.</p>
          <p>Support for various video formats including MP4, MOV, and AVI.</p>
        </div>
        <div>
          <h3>🌍 Multiple Languages</h3>
          <p>Support for a wide range of global languages including Hindi, Marathi, Tamil, Telugu, Gujarati.</p>
          <p>Continuously expanding language offerings to meet global needs.</p>
        </div>
        <div>
          <h3>🚀 Fast & Accurate</h3>
          <p>State-of-the-art AI technology ensures quick processing with high accuracy translations.</p>
          <p>Preserve the essence and context of your original content in translations.</p>
        </div>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;