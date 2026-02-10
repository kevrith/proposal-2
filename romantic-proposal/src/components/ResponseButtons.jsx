import { useState } from 'react';

function ResponseButtons({ show }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [showFireworks, setShowFireworks] = useState(false);

  const handleResponse = (response) => {
    const phoneNumber = '254718864578';
    const message = response === 'yes' 
      ? 'YES! I would love to be with you!'
      : 'I need more time to think about it...'
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleNoButtonHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ top: randomY, left: randomX });
  };

  const handleYesButtonHover = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 6000);
  };

  if (!show) return null;

  return (
    <>
      {showFireworks && (
        <div className="fireworks-overlay">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="firework-burst"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${(i % 3) * 0.4}s`
              }}
            />
          ))}
        </div>
      )}
      
      <div className="button-container">
        <button 
          className="btn btn-yes" 
          onClick={() => handleResponse('yes')}
          onMouseEnter={handleYesButtonHover}
        >
          💝 Yes, I'd love to! 💝
        </button>
        <button 
          className="btn btn-no" 
          onClick={() => handleResponse('no')}
          onMouseEnter={handleNoButtonHover}
          style={{
            transform: `translate(${noButtonPosition.left}px, ${noButtonPosition.top}px)`,
            transition: 'transform 0.3s ease'
          }}
        >
          I need time to think
        </button>
      </div>
    </>
  );
}

export default ResponseButtons;
