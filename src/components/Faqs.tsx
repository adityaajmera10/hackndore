import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Turret_Road } from "next/font/google";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const faqs = [
    {
        question: "How can we register for the competition?",
        answer: "You can register for the competition through our official website by filling out the registration form and submitting the required documents.",
      },
      {
    question: "What is the eligibility criteria for the competition?",
    answer: "The competition is open to students pursuing B.Tech/B.E./BCA/M.Tech/M.S/MCA or related Engineering Programs across ALL Engineering Colleges in India, with a special category for High School Students.",
  },
  {
    question: "How many members can be in a team?",
    answer: "Teams must consist of a minimum of 3 members to a maximum of 5 members.",
  },
  {
    question: "Can one person be a member of more than one team?",
    answer: "No, one person cannot be a member of more than one team.",
  },
  {
    question: "What is the deadline for registration?",
    answer: "The deadline for registration is 20-07-2024.",
  },
  {
    question: "But isn't Hackathon illegal?",
    answer: "Haha, my one of the favorite parts! The word hack is a bit misinterpreted in reference to hackathons, while over here no one is hacking into something. A hackathon is an event in which a large number of people meet to engage in collaborative computer programming.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, there is no registration fee for participating in the competition.",
  },
  {
    question: "What is the judging criteria?",
    answer: "The judging criteria include innovation, feasibility, presentation, and technical proficiency.",
  },
  {
    question: "What are the prizes for the winners?",
    answer: "The prizes include cash awards, trophies, certificates, and winner's kits for different categories.",
  },
  {
    question: "How can we contact the organizers for more information?",
    answer: "You can contact the organizers through the contact form on our official website or by emailing us at hackndore@gmail.com.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-11/12  backdrop-blur-sm">
      <h1
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
      >
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 px-2">
          {faqs.slice(0, 5).map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 max-w-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="bg-white/70 shadow-md rounded-lg p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-bold text-black">{faq.question}</h2>
                {expandedIndex === index ? <FiChevronUp className="text-2xl text-black" /> : <FiChevronDown className="text-2xl text-black" />}
              </div>
              {expandedIndex === index && (
                <motion.div
                  className="p-4 bg-white/70 "
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="w-full md:w-1/2 px-2">
          {faqs.slice(5).map((faq, index) => (
            <motion.div
              key={index + 6}
              className="mb-4 max-w-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index + 6) * 0.1 }}
            >
              <div
                className="bg-white/70 shadow-md rounded-lg p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index + 6)}
              >
                <h2 className="text-lg font-bold text-black">{faq.question}</h2>
                {expandedIndex === index + 6 ? <FiChevronUp className="text-2xl text-black" /> : <FiChevronDown className="text-2xl text-black" />}
              </div>
              {expandedIndex === index + 6 && (
                <motion.div
                  className="p-4 bg-white/70 "
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <FAQSection />
    {/* Other components can be added here */}
  </div>
);

export default App;
