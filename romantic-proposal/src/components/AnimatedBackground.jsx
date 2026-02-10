function AnimatedBackground() {
  return (
    <>
      <div className="flowers">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flower" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}>
            🌸
          </div>
        ))}
      </div>

      <div className="fireworks">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="firework" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}></div>
        ))}
      </div>

      <div className="hearts">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}>
            ❤️
          </div>
        ))}
      </div>
    </>
  );
}

export default AnimatedBackground;
