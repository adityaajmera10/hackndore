import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const prizes = [
  {
    title: "1st Place Winner",
    amount: "₹5 Lakh",
    icon: "🥇",
  },
  {
    title: "2nd Place Winner",
    amount: "₹3 Lakh",
    icon: "🥈",
  },
  {
    title: "3rd Place Winner",
    amount: "₹2 Lakh",
    icon: "🥉",
  },
  
];

interface WinnerCardProps {
  prize: {
    title: string;
    amount: string;
    icon: string;
  };
}

const PrizeGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-8 flex flex-col items-center w-11/12 pt-12 md:pt-20"
      id="Rewards"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
        variants={itemVariants}
      >
        Total Prize Money - ₹12 Lakh!
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-5 items-end"
        variants={itemVariants}
      >
        {prizes.map((prize, index) => (
          <WinnerCard key={index} prize={prize} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const WinnerCard: React.FC<WinnerCardProps> = ({ prize }) => {
  const itemVariants = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-md rounded-lg p-6 flex flex-col items-center justify-between w-full sm:w-1/4 text-white border border-gray-200"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center gap-3 w-full text-center">
        <div className="text-5xl mb-4">{prize.icon}</div>
        <h2 className="text-xl font-bold">{prize.title}</h2>
        <p className="text-3xl font-bold mt-4">{prize.amount}</p>
      </div>
    </motion.div>
  );
};

export default PrizeGrid;
