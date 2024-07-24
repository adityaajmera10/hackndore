import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from 'next/font/google';

const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

export default function CustomTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className=' md:mt-20 py-10  backdrop-blur-sm md:w-10/12 mx-auto'
    >
      <motion.h1 
        className={` text-2xl text-center md:text-5xl font-bold  ${turret.className} text-primary-heading`}
        variants={itemVariants}
      >
        Timeline
      </motion.h1>
      <Timeline position="alternate-reverse">
        {/* Item 1 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className='text-primary-heading' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              <div className="w-28 md:text-2xl text-xl text-right ${turret.className} text-primary-heading/50">16-07-24</div>
              <div className='text-white/50 text-right md:text-xl '>Registrations are opened for participants</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col  justify-start" variants={itemVariants}>
              <div className="w-28 text-xl md:text-2xl ${turret.className} text-primary-heading/50">22-07-24</div>
              <div className='text-white/50 text-left md:text-xl'>Final date for registration and presentation submission</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              <div className="w-28 md:text-2xl text-xl text-right ${turret.className} text-primary-heading">23-07-24</div>
              <div className='text-right md:text-xl'>Announcement of shortlisted teams and invitations</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start " variants={itemVariants}>
              <div className="w-28 text-xl md:text-2xl ${turret.className} text-primary-heading">26-07-24</div>
              <div className='text-left md:text-xl'>Offline registration and commencement of competition</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              <div className="w-28 md:text-2xl text-xl ${turret.className} text-primary-heading">26-07-24</div>
              <div className='text-right md:text-xl'>Problem Statements Disclosed to the participants</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 4 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              <div className="w-28 text-xl md:text-2xl ${turret.className} text-primary-heading">28-07-24</div>
              <div className='text-left md:text-xl'>Conclusion of competition and closing ceremony</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}