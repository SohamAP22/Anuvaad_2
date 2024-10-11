import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './translate.css';

function Translate({ setTranslatedVideoPath }) {
  const [file, setFile] = useState(null);
  const [subtitles, setSubtitles] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [translations, setTranslations] = useState([]);
  const [currentStep, setCurrentStep] = useState('upload');
  const [translateSupers, setTranslateSupers] = useState(false);
  const [superColor, setSuperColor] = useState('#000000'); // Default black
  const [superSize, setSuperSize] = useState('medium'); // Default size

  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleTranslation = () => {
    if (!file || !selectedLanguage) {
      alert('Please upload a video and select a target language.');
      return;
    }

    // Placeholder for actual translation logic
    console.log('Translation started');
    
    // Simulate translation and review process (this would be replaced by actual logic)
    const videoDuration = 100; // Placeholder duration in seconds
    const interval = 10;
    const totalIntervals = Math.ceil(videoDuration / interval);
    const simulatedTranslations = [];

    for (let i = 0; i < totalIntervals; i++) {
      simulatedTranslations.push({
        time: `${i * interval}-${(i + 1) * interval} sec`,
        english: `English subtitle for ${i * interval}-${(i + 1) * interval} sec`,
        translated: `Translated subtitle in ${selectedLanguage} for ${i * interval}-${(i + 1) * interval} sec`,
      });
    }

    setTranslations(simulatedTranslations);
    setCurrentStep('review');
  };

  const handleDub = () => {
    console.log('Dubbing started');
    setTranslatedVideoPath(URL.createObjectURL(file));
    navigate('/video-player');
  };

  return (
    <div className="translate">
      {currentStep === 'upload' && (
        <>
          <h1>Video Translation</h1>
          <input type="file" accept="video/*" onChange={handleFileUpload} />
          {file && <video src={URL.createObjectURL(file)} controls />}
          
          <h2>Choose Target Language</h2>
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">Select a language</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Gujarati">Gujarati</option>
          </select>

          <h2>Translate Supers (On-screen Text)</h2>
          <label>
            <input
              type="checkbox"
              checked={translateSupers}
              onChange={(e) => setTranslateSupers(e.target.checked)}
            />
            Translate on-screen text?
          </label>

          {translateSupers && (
            <div className="super-options">
              <h3>Super Text Customization</h3>

              <label>Choose Super Text Color:</label>
              <select value={superColor} onChange={(e) => setSuperColor(e.target.value)}>
                <option value="small">WHite</option>
                <option value="medium">Black</option>
                <option value="large">Blue</option>
              </select>

              <label>Choose Super Text Size:</label>
              <select value={superSize} onChange={(e) => setSuperSize(e.target.value)}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          )}

          <button onClick={handleTranslation}>Start Translation</button>
        </>
      )}

      {currentStep === 'review' && (
        <div className="review-section">
          <h2>Review Translations</h2>
          <table className="translation-table">
            <thead>
              <tr>
                <th>Time Frame</th>
                <th>English</th>
                <th>{selectedLanguage}</th>
              </tr>
            </thead>
            <tbody>
              {translations.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.english}</td>
                  <td>{item.translated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="dub-button">
            <button onClick={handleDub}>Dub and View</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translate;