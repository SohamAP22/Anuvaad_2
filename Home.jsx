import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaGlobe,
  FaRocket,
  FaUsers,
  FaMobileAlt,
  FaLock,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Anuvaad</h1>
          <p className="hero-subtitle">
            Breaking Language Barriers in Video Content
          </p>
          <Link to="/translate" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="animated-background">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="orb orb3"></div>
        </div>
      </div>

      <section className="intro">
        <p>
          Anuvaad is your go-to solution for translating audio and subtitles in
          English videos to multiple languages. Our cutting-edge technology
          ensures accurate and seamless translations, opening up your content to
          a global audience.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaVideo className="feature-icon" />
            <h3>Video Translation</h3>
            <ul>
              <li>
                Translate both audio and subtitles in your videos with high
                accuracy.
              </li>
              <li>
                Support for various video formats including MP4, MOV, and AVI.
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <h3>Multiple Languages</h3>
            <ul>
              <li>
                Support for a wide range of global languages including Hindi,
                Marathi, Tamil, Telugu, Gujarati.
              </li>
              <li>
                Continuously expanding language offerings to meet global needs.
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Fast & Accurate</h3>
            <ul>
              <li>
                State-of-the-art AI technology ensures quick processing with
                high accuracy translations.
              </li>
              <li>
                Preserve the essence and context of your original content in
                translations.
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Collaboration Tools</h3>
            <ul>
              <li>
                Easy sharing and collaboration features for team projects.
              </li>
              <li>
                Real-time editing and version control for seamless teamwork.
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <FaMobileAlt className="feature-icon" />
            <h3>Mobile Friendly</h3>
            <ul>
              <li>
                Access and manage your projects on-the-go with our mobile app.
              </li>
              <li>Compatible with both iOS and Android devices.</li>
            </ul>
          </div>
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure & Private</h3>
            <ul>
              <li>Advanced encryption to keep your content safe and secure.</li>
              <li>
                Strict privacy policies to protect your intellectual property.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Upload your video</li>
          <li>Select target languages</li>
          <li>Our AI processes your content</li>
          <li>Review and download your translated video</li>
        </ol>
        <Link to="/how-it-works" className="learn-more">
          Learn More
        </Link>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "Anuvaad has revolutionized our content strategy. We can now reach
              a global audience with ease!"
            </p>
            - Sarah J., Content Creator
          </div>
          <div className="testimonial-card">
            <p>
              "The accuracy and speed of translations are impressive. It's a
              game-changer for our educational videos."
            </p>
            - Dr. Patel, Online Educator
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Go Global?</h2>
        <p>Start translating your videos today and expand your reach!</p>
        <Link to="/signup" className="cta-button">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
