"use client";
import React, { useState } from 'react';
import VideoComponent from '@/components/VideoComponent';
import HomePage from '@/components/HomePage';
import { AnimatePresence, motion } from 'framer-motion';

const Index: React.FC = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleAnimationComplete = () => {
    setShowHomePage(true);
  };

  return (
    <div className='bg-black text-white'>
      
      <div className='z-40 '>
        
      <AnimatePresence>
        {!showHomePage ? (
          <motion.div
          key="video"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <div className="hidden md:block bg-black">
            <VideoComponent src="/intro.mp4" onComplete={handleAnimationComplete} />

            </div>
            <div className="md:hidden">
            <VideoComponent src="/mobileintro.mp4" onComplete={handleAnimationComplete} />

            </div>
          </motion.div>
        ) : (
          <motion.div
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
        </div>
    </div>
  );
};

export default Index;
