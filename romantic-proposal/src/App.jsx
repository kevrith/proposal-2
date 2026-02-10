import { useState, useEffect } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Image from './components/Image';
import ProposalMessage from './components/ProposalMessage';
import LoveQuotes from './components/LoveQuotes';
import ResponseButtons from './components/ResponseButtons';

function App() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => setShowButtons(true), 3000);
    return () => clearTimeout(buttonTimer);
  }, []);

  return (
    <div className="app">
      <AnimatedBackground />
      
      <div className="content">
        <h1 className="title">💖 A Special Question 💖</h1>
        <Image />
        <ProposalMessage />
        <LoveQuotes />
        <ResponseButtons show={showButtons} />
      </div>
    </div>
  );
}

export default App;
