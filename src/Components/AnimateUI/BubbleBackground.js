import React from 'react';
import PropTypes from 'prop-types';
import './BubbleBackground.css';

export const BubbleBackground = ({ interactive = false, className = '' }) => {
  // Render a set of decorative bubbles with gentle animation
  // Respect prefers-reduced-motion in CSS
  const bubbles = [
    { size: 160, left: '8%', top: '20%', delay: 0 },
    { size: 110, left: '70%', top: '10%', delay: 2 },
    { size: 90, left: '50%', top: '60%', delay: 1 },
    { size: 140, left: '20%', top: '70%', delay: 3 },
    { size: 70, left: '85%', top: '50%', delay: 0.5 },
  ];

  return (
    <div className={`bubble-bg ${className} ${interactive ? 'interactive' : ''}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: b.left,
            top: b.top,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

BubbleBackground.propTypes = {
  interactive: PropTypes.bool,
  className: PropTypes.string,
};

export default BubbleBackground;
