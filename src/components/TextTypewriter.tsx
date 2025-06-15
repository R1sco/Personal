"use client"

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  /** milliseconds per char */
  speed?: number;
  className?: string;
}

const TextTypewriter: React.FC<TypewriterProps> = ({ text, speed = 50, className = '' }) => {
  const [display, setDisplay] = useState<string>('');

  useEffect(() => {
    
    setDisplay('');
    let idx = 0;
    const ticker = setInterval(() => {
      setDisplay(text.slice(0, idx + 1));
      idx++;
      if (idx >= text.length) {
        clearInterval(ticker);
      }
    }, speed);
    return () => clearInterval(ticker);
  }, [text, speed]);

  return <div className={className}>{display}</div>;
};

export default TextTypewriter;
