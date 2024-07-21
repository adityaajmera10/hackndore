import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
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
import VenuePartner from "./VenuePartner";
import MayorsKeynote from "./MayorsKeynote";
import ChairmansAddress from "./ChairPersonsNote";
import Unstop from "./Unstop";
import ContactPage from "./Contact";

import { Turret_Road } from "next/font/google";
export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
  const targetDate = new Date("2024-07-28");
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
          className="w-11/12 mx-auto p-5 sm:pt-16 max-w-[110rem] pt-8 "
        >
          <div className="-mt-10 flex flex-col-reverse md:items-center lg:flex-row gap-10 lg:mt-10 ">
            <div className="lg:w-3/5 flex flex-col gap-5">
              <h1
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading  ${turret.className}`}
              >
                Hack&apos;Ndore
              </h1>
              <h3 className="-mt-6 ml-10 ">A 48-hour PAN India Hackathon</h3>
              <h1 className="text-xl sm:text-2xl lg:text-3xl  font-mono md:w-11/12  ">
                Let&apos;s Crack the Code to 
                <ScrambleText />

              </h1>
              <p className="pl-4 text-base sm:text-xl ">
                Welcome to the inaugural Hack&apos;Ndore Hackathon, Central
                India&apos;s largest technology event, brought to you by Indore
                Municipal Corporation, under the leadership of Hon&apos;ble
                Mayor of Indore Shri Pushyamitra Bhargav. This pioneering
                hackathon aims to tackle real-time challenges faced by our
                Municipal Corporation, e-Nagarpalika and other e-Governance
                portals.
              </p>
              <div className="flex items-center">
                <Link
                  href="https://unstop.com/p/hackndore-indore-municipal-corporation-1069856?lb=A3xScbSM&utm_medium=Share&utm_source=WhatsApp"
                  target="_blank"
                  className="relative px-4 py-2 text-[1.6rem] font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg max-w-56 text-center mx-auto"
                >
                  <div className="relative z-10">Register Now</div>
                  
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
                </Link>
              </div>
              <div className={`hidden md:block font-thin text-2xl text-red-500 mx-auto ${turret.className} absolute right-0 pr-16 top-20 z-10 left-24`}>Last Date to register : 22-07-24</div>
              <div className={`md:hidden font-thin text-2xl text-red-500 mx-auto text-center ${turret.className}`}>Last Date to register : 22-07-24</div>
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
          <div className="md:h-10"></div>
          <SectionDividerLine />
        </section>

        <section id="vision" className="pb-24">
          <MayorsKeynote/>
        </section>
        <section id="vision" className="pb-24">
          <ChairmansAddress/>
        </section>
        <section className="pb-24">
          <Countdown targetDate={targetDate} />
        </section>
        <section className="pb-24">
          <Unstop />
        </section>
        <section >
          <PrizeGrid />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="guidelines">
          <Guidelines />
        </section>
        <section id="guidelines">
          <ContactPage />
        </section>

        <section id="" className="hidden  flex-col items-center gap-4 pt-16">
          <TeamSection />
        </section>

        <section id="" className="flex flex-col items-center gap-4 pt-16">
          <VenuePartner />
        </section>

        <section
          id="faqs"
          className="flex flex-col items-center gap-4 pt-16"
        >

        <Faqs />
        <SectionDividerLine />
        </section>

        <div className="h-64">
          <Footer/>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
