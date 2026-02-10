import { useState, useEffect } from 'react';

const quotes = [
  "In you, I've found the love of my life and my closest, truest friend.",
  "You are my today and all of my tomorrows.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the finest, loveliest, tenderest person I have ever known.",
];

function LoveQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="quote-section">
      <p className="quote">{quotes[currentQuote]}</p>
    </div>
  );
}

export default LoveQuotes;
