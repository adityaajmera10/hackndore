import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./common/Navbar";
import SectionDividerLine from "./SectionDividerLine";
import ScrambleText from "@/components/ScrambleText";
import Link from "next/link";
import TechnologyCarnivalHeader from "./TechnologyCarnivalHeader";
import Countdown from "@/components/Countdown";
import Timeline from "./Timeline";
import Guidelines from "./Guidelines";
import PrizeGrid from "./PrizeGrid";
import Faqs from "./Faqs";
import TeamSection from "./TeamSection";
import MayorsKeynote from "./MayorsKeynote";
import ContactPage from "./Contact";
import Socials from "./Socials";
import Footer from "@/components/common/Footer";

import { Turret_Road } from "next/font/google";
import CommunityPartners from "./Partners";
import { FlipWords } from "./ui/flip-words";


export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
  const targetDate = new Date("2024-07-26");
  const timelineData = [
    { label: "Problem Statements Release" },
    { label: "Idea Proposal Submission" },
    { label: "Announcement of Selected Teams" },
    { label: "Hackathon Starts" },
    { label: "Hackathon Ends" },
    { label: "Announcement of Winners" },
  ];

  // Animation variants for the main content
  const mainContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mainContentVariants}
        className="pt-20"
      >
        <section
          id="hero"
          className="w-11/12 mx-auto p-5 sm:pt-16 max-w-[110rem] pt-8 backdrop-blur-sm"
        >
          <div className="-mt-10 flex flex-col-reverse md:items-center lg:flex-row gap-10 lg:mt-10 ">
            <div className="lg:w-3/5 flex flex-col gap-5">
              <h1
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading  ${turret.className}`}
              >
                Hack&apos;Ndore
              </h1>
              <h3 className="-mt-6 ml-10 ">A 48-hour PAN India Hackathon</h3>
              <h1 className="text-xl sm:text-2xl lg:text-3xl  font-mono md:w-11/12 ">
                Let&apos;s Crack the Code to 
                <FlipWords words={["Innovate", "Collaborate", "Create"]} />

              </h1>
              <p className="pl-4 text-base sm:text-xl ">
                Welcome to the inaugural Hack&apos;Ndore Hackathon, Central
                India&apos;s largest technology event, brought to you by Indore
                Municipal Corporation, under the leadership of Hon&apos;ble
                Mayor of Indore Shri Pushyamitra Bhargav. <span className="hidden md:block">
                This pioneering hackathon aims to tackle real-time challenges faced by our
                Municipal Corporation, e-Nagarpalika and other e-Governance
                portals.
                </span>
              </p>
              <div className='flex align-center justify-center'><Socials/></div>
              <div className="flex items-center">
                <Link
                  href="./results"
                  target="_blank"
                  className="relative px-4 py-2 text-[1.6rem] font-bold  rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg max-w-72 text-center mx-auto"
                >
                  <div className="relative z-10 text-xl">Results Are Out!!</div>
                  
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
                </Link>
              </div>
            </div>
            <div className="sm:mt-5  lg:w-3/5 xl:w-2/5">
              <video
                src="./heroVideo.mp4"
                className="border-4 border-gray-500"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <SectionDividerLine />
          <div className=" pt-10">
            <TechnologyCarnivalHeader />
          </div>
        </section>
        <div id="vision"></div>
        <section id="vision" className="pb-8">
          <MayorsKeynote/>
        </section>
        <section className="pb-24">
          <Countdown targetDate={targetDate} />
        </section>
        
        <section >
          <PrizeGrid />
        </section>
        <div id="timeline"></div>
        <section>
          <Timeline />
        </section>
        <section id="" className="hidden  flex-col items-center gap-4 pt-16">
          <TeamSection />
        </section>
        <section id="" className="  flex-col items-center gap-4 pt-16">
          <CommunityPartners />
        </section>
        <section id="guidelines">
          <Guidelines />
        </section>
        <section
          id="faqs"
          className="flex flex-col items-center gap-4 pt-16"
        >
        <Faqs />
        <SectionDividerLine />
        </section>
        <section id="guidelines">
          <ContactPage />
        </section>
        <section id="guidelines">
          <Footer />
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
