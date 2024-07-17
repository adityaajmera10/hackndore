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
    amount: "₹ 1,50,000",
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🏆",
  },
  {
    title: "First Runner-up",
    amount: "₹ 1,00,000",
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🥈",
  },
  {
    title: "Second Runner-up",
    amount: "₹ 50,000",
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🥉",
  },
  {
    title: "Winner (School Team)",
    amount: "₹ 25,000",
    details: "Trophy, Certificate, Winner's Kit",
    icon: "🏫",
  },
  {
    title: "First Runner-up (School Team)",
    amount: "₹ 15,000",
    details: "Trophy, Certificate, Winner's Kit",
    icon: "📚",
  },
  {
    title: "Special Prizes",
    amount: "₹ 60,000",
    details: "Six Categories of 10000 each, Trophy, Certificate, Winner's Kit",
    icon: "🎁",
  },
];

interface WinnerCardProps {
  prize: {
    title: string;
    amount: string;
    details: string;
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
        className="flex flex-wrap justify-center gap-5"
        variants={itemVariants}
      >
        {prizes.map((prize, index) => (
          <WinnerCard key={index} prize={prize} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const WinnerCard: React.FC<WinnerCardProps & { index: number }> = ({
  prize,
  index,
}) => {
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
      className={`bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between w-full sm:w-1/3 mt-${index * 8}`}
      variants={itemVariants}
    >
      <div className="flex items-start sm:items-center justify-between sm:space-x-4 gap-5 w-full">
        <div>
          <div>
            <h2 className="text-xl font-bold text-black">{prize.title}</h2>
            <p className="text-gray-700">{prize.details}</p>
          </div>
          <p className="text-2xl font-bold mt-4 text-black">{prize.amount}</p>
        </div>
        <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center">
          <span className="text-3xl">{prize.icon}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PrizeGrid;
