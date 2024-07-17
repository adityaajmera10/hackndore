"use client";
import React, { useState, useEffect } from 'react';
import { Turret_Road } from "next/font/google";


export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

interface WordEmoji {
  word: string;
  emoji: string;
}

const ScrambleHeading: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentEmoji, setCurrentEmoji] = useState<string>('');
  const wordEmojis: WordEmoji[] = [
    { word: 'Sustainable', emoji: '💻' },
    { word: 'Digital', emoji: '💡' },
    { word: 'Smarter', emoji: '💡' }
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  const scrambleText = (finalText: string, emoji: string) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let iteration = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      setDisplayText(prevText => 
        finalText.split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    setCurrentEmoji(emoji);
  };

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordEmojis.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const { word, emoji } = wordEmojis[currentWordIndex];
    scrambleText(word, emoji);
  }, [currentWordIndex]);

  return (
      <span className={`ml-2 text-xl italic sm:text-2xl md:text-[1.5rem] mt-2 text-primary-heading  ${turret.className}`}>
        {displayText}{currentEmoji}
      </span>
  );
};

export default ScrambleHeading;