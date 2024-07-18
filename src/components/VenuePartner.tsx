import React from 'react'
import { Turret_Road } from 'next/font/google';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

export default function VenuePartner() {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className='mt-24 p-10 flex flex-col items-center justify-center gap-5 bg-white/10 backdrop-blur-sm'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1         
        className={` text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}
        variants={itemVariants}
      >
        Venue Partner
      </motion.h1>
      <motion.div variants={itemVariants}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.893246935181!2d75.94263188998197!3d22.82040509113712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf455b4cec3%3A0x426141aa8141f7a5!2sAcropolis%20Institute%20Of%20Technology%20And%20Research%20-%20AITR!5e0!3m2!1sen!2sin!4v1721172607895!5m2!1sen!2sin" 
          className='h-96 w-[80vw] max-w-[40rem] rounded-3xl' 
          loading="lazy"
        ></iframe>
      </motion.div>
      <motion.h2 
        className='w-10/12 text-center md:text-xl'
        variants={itemVariants}
      >
        Acropolis Institute Of Technology And Research - AITR(Indore)
      </motion.h2>
    </motion.div>
  )
}