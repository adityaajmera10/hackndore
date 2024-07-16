import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const images = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  // Add more image paths as needed
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = page % images.length;

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full" onClick={() => paginate(-1)}>
        <span className="text-white text-2xl">{'<'}</span>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full" onClick={() => paginate(1)}>
        <span className="text-white text-2xl">{'>'}</span>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-500'}`}></span>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <ImageSlider />
    {/* Other components can be added here */}
  </div>
);

export default App;
