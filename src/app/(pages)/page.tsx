"use client";
import React, { useState } from "react";
import VideoComponent from "@/components/VideoComponent";
import HomePage from "@/components/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const Index: React.FC = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleAnimationComplete = () => {
    setShowHomePage(true);
  };

  return (
    <div className="bg-black text-white relative">
      <Head>
        <meta property="og:title" content="Hackndore - Hackathon in Indore" />
        <meta
          property="og:description"
          content="Central India's largest technology event, brought to you by Indore Municipal Corporation, under the leadership of Hon'ble Mayor of Indore Shri Pushyamitra Bhargav. This pioneering hackathon aims to tackle real-time challenges faced by our Municipal Corporation, e-Nagarpalika and other e-Governance portals.The Hackndore Hackathon is a digital initiative by the Indore Municipal Corporation, aiming to position Indore as a technology leader. We bring together brilliant minds to innovate and address urban challenges through collaboration and sustainability. "
        />
        <meta property="og:url" content="https://hackndore.in" />
        <meta property="og:type" content="website" />
      </Head>
      <Head>
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
      </Head>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-65 blur-[1px]"
      >
        <source src="/herobg.mp4" type="video/mp4" className="opacity-10" />
      </video>

      <div className="z-40 relative">
        <AnimatePresence>
          {!showHomePage ? (
            <>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-black ">
                  <VideoComponent
                    src="/intro.mp4"
                    onComplete={handleAnimationComplete}
                    className=""
                  />
                </div>
              </motion.div>
            </>
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