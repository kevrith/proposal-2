import './Image.css';

function Image() {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <div className="rotating-border"></div>
        <div className="glow-effect"></div>
        <img 
          src="/shee.jpeg" 
          alt="Beautiful" 
          className="her-image"
        />
        <div className="sparkles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="sparkle" 
              style={{ 
                '--angle': `${i * 30}deg`,
                animationDelay: `${i * 0.1}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
      <p className="image-caption">The one who makes my heart skip a beat 💓</p>
    </div>
  );
}

export default Image;
