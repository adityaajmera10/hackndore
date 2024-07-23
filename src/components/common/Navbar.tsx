"use client";

import React, { useState } from "react";
import svvvLogo from "@/../public/imc.png";
import AbhyudayaLogo from "@/../public/hackndore.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showPortals, setShowPortals] = useState(false);

  const toggleModel = () => {
    setNavOpen(!navOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <motion.nav 
      className="fixed mb-16 w-full z-20  bg-rich-blue-bg/80"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link href={"./"} className="py-2 flex">
            <Image
              src={svvvLogo}
              className="h-8 w-8 md:h-16 md:w-16 mr-2"
              alt="Logo"
            />
            <Image
              src={AbhyudayaLogo}
              className="h-8 w-52 md:h-16 md:w-64 translate-y-1"
              alt="Logo"
              priority
            />
          </Link>
        </motion.div>
        <motion.div className="text-white hidden sm:flex sm:translate-x-16" variants={containerVariants}>
          {navData?.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={item?.path}
                className="px-4 text-[#EEE] hover:text-[#fff]  text-nowrap transition-all duration-200 ease-in-out"
              >
                {item?.title}
              </Link>
            </motion.div>
          ))}
          <motion.div 
            className="relative"
            onMouseEnter={() => setShowPortals(true)}
            onMouseLeave={() => setShowPortals(false)}
            variants={itemVariants}
          >
            <div className="px-4 text-[#EEE] hover:text-[#fff]  text-nowrap transition-all duration-200 ease-in-out cursor-pointer">
              Our Portals
            </div>
            {showPortals && (
              <div className="absolute left-0 w-64 rounded-2xl shadow-lg bg-white/90 ring-1 ring-black ring-opacity-5">
                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="https://www.imcindore.mp.gov.in/" target="_blank" className="flex px-4 py-2 text-sm text-blue-600 hover:text-blue-400" role="menuitem">
                    <FaExternalLinkAlt className='h-6 w-6 mb-2' />
                    <span className="text-sm ml-3">Indore Municipal Corporation(Website)</span>
                  </Link>
                  <Link href="https://www.mpenagarpalika.gov.in/irj/portal/anonymous" target="_blank" className="flex px-4 py-2 text-sm text-blue-600 hover:text-blue-400" role="menuitem">
                    <FaExternalLinkAlt className='h-6 w-6 mb-2' />
                    <span className="text-sm ml-3">Indore Nagar Palika</span>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.everythingcivic.indore&hl=en_IN&pli=1" target="_blank" className="flex px-4 py-2 text-sm text-blue-600 hover:text-blue-400" role="menuitem">
                    <FaExternalLinkAlt className='h-6 w-6 mb-2' />
                    <span className="text-sm ml-3">311 App</span>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div className="sm:invisible relative" variants={itemVariants}>
          <button onClick={toggleModel}>
            {!navOpen && <FiAlignJustify color="white" size={35} className="mt-2 ml-12" />}
            {navOpen && <FaTimes color="#ddd" size={35} className="mt-2 ml-12" />}
          </button>
          {navOpen && (
            <motion.div 
              className="absolute right-4 flex flex-col bg-[#0f1437b0] border border-white rounded-lg p-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {navData?.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    href={item?.path}
                    className="px-8 py-1 text-[#eee] hover:text-[#fff] text-nowrap transition-all duration-200 ease-in-out"
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="relative" variants={itemVariants}>
                <div className={`px-8 py-1 cursor-pointer ${showPortals? 'text-blue-700' : 'text-white'}`} onClick={() => setShowPortals(!showPortals)}>
                  Our Portals
                </div>
                {showPortals && (
                  <div className={ `bg-white absolute rounded-lg right-32 top-2 `}>
                    <Link href="https://www.imcindore.mp.gov.in/" target="_blank" className="block px-2 py-1 text-sm text-blue-600 hover:text-blue-400 transition-all duration-200 ease-in-out">
                      Indore Municipal Corporation(Website)
                    </Link>
                    <Link href="https://www.mpenagarpalika.gov.in/irj/portal/anonymous" target="_blank" className="block px-2 py-1 text-sm text-blue-600 hover:text-blue-400 transition-all duration-200 ease-in-out">
                      Indore Nagar Palika
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.everythingcivic.indore&hl=en_IN&pli=1" target="_blank" className="block px-2 py-1 text-sm text-blue-600 hover:text-blue-400 transition-all duration-200 ease-in-out">
                      311 App
                    </Link>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href='https://unstop.com/p/hackndore-indore-municipal-corporation-1069856?lb=A3xScbSM&utm_medium=Share&utm_source=WhatsApp'
            target="_blank"
            className="hidden lg:block relative px-4 py-2 text-xl text-center font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg"
          >
            <div className="relative z-10 ">Registrations Closed</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
