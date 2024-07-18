import React from 'react';
import { motion } from 'framer-motion';

import { Turret_Road } from "next/font/google";
export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const ContactForm = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
};
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="p-4 sm:p-6 rounded-lg shadow-lg md:w-full w-11/12 max-w-[600px]  mx-auto bg-white/10 backdrop-blur-sm"
    >
      <h1 
                className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}
                
            >
                Countdown
            </h1>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input type="text" placeholder="First Name" className="flex-1 p-2 border rounded w-full" />
          <input type="text" placeholder="Last name" className="flex-1 p-2 border rounded w-full" />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          
          <div className="flex w-full space-x-2">
           <input type="tel" className="flex-1 p-2 border rounded" placeholder='Mobile Number' />
          </div>
        </div>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Explain in under 100 words" className="w-full p-2 border rounded h-24 resize-none"></textarea>
        
        <div className="space-y-2 text-lg sm:text-base ">
          <h3 className="font-semibold">Contact us at</h3>
          <p>📧 hackndore@gmail.com</p>
          <p>📞 Sambhav Bhandari <br className="sm:hidden" />(+91) 90399 69100</p>
          <p>📞 Himanshu Goyal <br className="sm:hidden" />(+91) 7828433422</p>
          <p>📞 Bharat Udawat <br className="sm:hidden" />(+91) 8389549300</p>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;