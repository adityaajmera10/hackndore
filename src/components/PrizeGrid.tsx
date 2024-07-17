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
    title: "Winner",
    amount: 150000,
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🏆",
  },
  {
    title: "First Runner-up",
    amount: 100000,
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🥈",
  },
  {
    title: "Second Runner-up",
    amount: 50000,
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🥉",
  },
  {
    title: "Winner (School Team)",
    amount: 25000,
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🏫",
  },
];

interface WinnerCardProps {
  prize: {
    title: string;
    amount: number;
    details: string;
    icon: string;
  };
  height: string;
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

  const getHeight = (amount: number) => {
    const maxHeight = 400; // Maximum height for the highest prize
    const minHeight = 250; // Minimum height for the lowest prize
    const maxAmount = Math.max(...prizes.map((p) => p.amount));
    return `${((amount / maxAmount) * (maxHeight - minHeight)) + minHeight}px`;
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-8 flex flex-col items-center w-11/12 pt-12 md:pt-36"
      id="Rewards"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
        variants={itemVariants}
      >
        Rewards and Prizes
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-5 items-end"
        variants={itemVariants}
      >
        <WinnerCard prize={prizes[2]} height={getHeight(prizes[2].amount)} />
        <WinnerCard prize={prizes[0]} height={getHeight(prizes[0].amount)} />
        <WinnerCard prize={prizes[1]} height={getHeight(prizes[1].amount)} />
      </motion.div>
    </motion.div>
  );
};

const WinnerCard: React.FC<WinnerCardProps> = ({ prize, height }) => {
  const itemVariants = {
    hidden: { height: 0 },
    visible: {
      height,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center md:w-[30%] w-[20%] border-4"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
        <span className="text-3xl">{prize.icon}</span>
      </div>
      <div 
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-between w-full"
        style={{ height: `calc(${height} - 5rem)` }} // Subtracting the icon height and margin
      >
        <div className="flex flex-col items-center w-full rotate-90 sm:rotate-0 mt-20 ">
          <div>
            <h2 className="text-sm md:text-xl font-bold text-black w-[250px] md:w-auto md:mt-0">{prize.title}</h2>
            <p className="text-xl md:text-2xl font-bold  text-black ">₹{prize.amount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrizeGrid;