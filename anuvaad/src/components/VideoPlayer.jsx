import React from 'react';
import { Link } from 'react-router-dom';
import './translate.css'; // Reuse the same CSS for consistency

function VideoPlayer({ translatedVideoPath }) {
  return (
    <div className="translate">
      <h1>Translated Video Player</h1>
      {translatedVideoPath ? (
        <>
          <video src={translatedVideoPath} controls />
          <p>This is your translated and dubbed video. You can play, pause, and adjust the volume as needed.</p>
          <a href={translatedVideoPath} download="translated_video.mp4">
            <button>Download Translated Video</button>
          </a>
        </>
      ) : (
        <>
          <p>No translated video available. Please complete the translation and dubbing process first.</p>
          <Link to="/translate">
            <button>Go to Translation Page</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;