function ResponseButtons({ show }) {
  const handleResponse = (response) => {
    const phoneNumber = '254718864578';
    const message = response === 'yes' 
      ? '💕 YES! I would love to be with you! 💕'
      : '😔 I need more time to think about it...';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!show) return null;

  return (
    <div className="button-container">
      <button className="btn btn-yes" onClick={() => handleResponse('yes')}>
        💝 Yes, I'd love to! 💝
      </button>
      <button className="btn btn-no" onClick={() => handleResponse('no')}>
        I need time to think
      </button>
    </div>
  );
}

export default ResponseButtons;
