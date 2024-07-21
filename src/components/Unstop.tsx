import React from "react";
import { FaUsers, FaCog, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { turret } from "@/components/Countdown";

const RegistrationProcess: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10 flex justify-center items-center ">
      <div className="w-[90vw] max-w-7xl mx-auto text-centerbackdrop-blur-sm pt-16">
        <h1
          className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading pb-16`}
        >
          How to register on Unstop?
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center text-white">
          {[
            {
              icon: <FaUsers className="text-4xl mb-4" />,
              title: "Submission Round",
              dates: (
                <div>
                  <strong>Start:</strong> 14 Jul 24, 08:00 AM IST
                  <br />
                  <strong>End:</strong> 20 Jul 24, 11:59 PM IST
                </div>
              ),
              subtitle: "Identify Challenges",
              description: (
                <div>
                  Prepare a short presentation showcasing your Skills
                  <ul className="list-disc list-inside">
                    <li>Identify challenges in Indore</li>
                    <li>Design suitable idea to solve the challenges.</li>
                    <li>Propose a sustainable solution.</li>
                  </ul>
                </div>
              ),
              bgClass: "bg-orange-500",
            },
            {
              icon: <FaCog className="text-4xl mb-4" />,
              title: "Offline Round",
              dates: (
                <div>
                  <strong>Start:</strong> 26 Jul 24, 09:00 AM IST
                  <br />
                  <strong>End:</strong> 28 Jul 24, 10:00 PM IST
                </div>
              ),
              subtitle: "Attend the Offline Round",
              description: (
                <div>
                  All shortlisted participants are invited to attend the offline
                  round at Acropolis Institute of Technology and Research,
                  Indore. Participants will be responsible for arranging their
                  own travel arrangements to the venue.
                </div>
              ),
              bgClass: "bg-pink-600",
            },
            {
              icon: <FaClock className="text-4xl mb-4" />,
              title: "Presentation Round",
              dates: (
                <div>
                  <strong>Start:</strong> 28 Jul 24, 04:30 PM IST
                  <br />
                  <strong>End:</strong> 28 Jul 24, 10:00 PM IST
                </div>
              ),
              subtitle: "Final Presentation",
              description: (
                <div>
                  The top 10 teams will have the opportunity to present their
                  work and compete for the title of Hack&apos;Ndore champions.
                </div>
              ),
              bgClass: "bg-purple-700",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center flex-1 p-6 rounded-lg shadow-lg"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.icon}
              <h2
                className={`${item.bgClass} text-white py-2 px-4 rounded-full font-bold mb-4`}
              >
                {item.title}
              </h2>
              <div className="mb-5">{item.dates}</div>
              <h3 className="font-bold mb-2">{item.subtitle}</h3>
              <div>{item.description}</div>
            </motion.div>
          ))}
        </div>
        <div  id="Rewards"></div>
      </div>
    </div>
  );
};

export default RegistrationProcess;