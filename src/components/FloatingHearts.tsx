import React from 'react';
import '../styles/FloatingHearts.css';

interface FloatingHeartsProps {
  count?: number;
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'normal' | 'fast';
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({
  count = 12,
  size = 'medium',
  speed = 'normal'
}) => {
  const hearts = ['💖', '💕', '💗', '💝', '🌸', '✨'];
  
  return (
    <div className={`floating-hearts-container ${size} ${speed}`}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`floating-heart-item heart-${i % 6}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          {hearts[i % hearts.length]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;