import React from 'react';
import { motion } from 'framer-motion';
import { Turret_Road } from "next/font/google";
import { useInView } from 'react-intersection-observer';

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const TechnologyCarnivalHeader: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className=" text-white p-4 sm:p-6 md:p-8 text-center"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h1
        className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-primary-heading ${turret.className}`}
        variants={itemVariants}
      >
        Central India&apos;s biggest technology carnival
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 font-mono"
        variants={itemVariants}
      >
        brought to you by
      </motion.p>
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl lg:text-4xl italic mb-2 sm:mb-4 py-1 md:py-4"
        variants={itemVariants}
      >
        Indore Municipal Corporation,
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 font-mono"
        variants={itemVariants}
      >
        Under the leadership of Hon&apos;ble Mayor, Indore
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 text-cyan-400 py-1 md:py-4"
        variants={itemVariants}
      >
        Shri Pushyamitra Bhargav Ji
      </motion.p>
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 font-mono"
        variants={itemVariants}
      >
        and guidance of Incharge - Planning & IT department at IMC,
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-cyan-400 py-1 md:py-4"
        variants={itemVariants}
      >
        Shri Rajesh Udawat Ji
      </motion.p>
    </motion.div>
  );
};

export default TechnologyCarnivalHeader;
