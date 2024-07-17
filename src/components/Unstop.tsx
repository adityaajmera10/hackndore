import React from 'react';
import { FaClock, FaUsers, FaClipboardList, FaCog } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { turret } from '@/components/Countdown';

const RegistrationProcess: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="py-10">
            <div className="w-[80vw] md:w-10/12 mx-auto text-center">
                <h1 className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading pb-16`}>
                    How to register on Unstop?
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
                    {[
                        {
                            icon: <FaUsers className="text-4xl mb-4" />,
                            title: "Submission Round Part 1",
                            dates: (
                                <>
                                    <strong>Start:</strong> 14 Jul 24, 08:00 AM IST
                                    <br />
                                    <strong>End:</strong> 20 Jul 24, 11:59 PM IST
                                </>
                            ),
                            subtitle: "Identify Challenges",
                            description: (
                                <>
                                    Prepare a short presentation showcasing the team’s past experience and addressing the following topics:
                                    <ul className="list-disc list-inside">
                                        <li>Identify challenges in Indore that could be addressed through technology.</li>
                                    </ul>
                                    Presentations must consist of 3 to 6 slides, excluding introductory slides.
                                </>
                            ),
                            bgClass: "bg-orange-500",
                        },
                        {
                            icon: <FaClipboardList className="text-4xl mb-4" />,
                            title: "Submission Round Part 2",
                            dates: (
                                <>
                                    <strong>Start:</strong> 14 Jul 24, 08:00 AM IST
                                    <br />
                                    <strong>End:</strong> 20 Jul 24, 11:59 PM IST
                                </>
                            ),
                            subtitle: "Propose Solutions",
                            description: (
                                <>
                                    Prepare a short presentation addressing the following topics:
                                    <ul className="list-disc list-inside">
                                        <li>Design suitable approaches to solve these challenges.</li>
                                        <li>Propose a sustainable technology-driven solution.</li>
                                    </ul>
                                    Only 100 teams will advance to the next round, including 5 reserved spots for school students.
                                    Upon being shortlisted, you will be notified by us. Participants will need to make their own travel arrangements.
                                </>
                            ),
                            bgClass: "bg-orange-500",
                        },
                        {
                            icon: <FaCog className="text-4xl mb-4" />,
                            title: "Offline Round",
                            dates: (
                                <>
                                    <strong>Start:</strong> 26 Jul 24, 09:00 AM IST
                                    <br />
                                    <strong>End:</strong> 28 Jul 24, 10:00 PM IST
                                </>
                            ),
                            subtitle: "Attend the Offline Round",
                            description: (
                                <>
                                    All shortlisted participants are invited to attend the offline round at Acropolis Institute of Technology and Research, Indore.
                                    Participants will be responsible for arranging their own travel arrangements to the venue.
                                </>
                            ),
                            bgClass: "bg-pink-600",
                        },
                        {
                            icon: <FaClock className="text-4xl mb-4" />,
                            title: "Presentation Round",
                            dates: (
                                <>
                                    <strong>Start:</strong> 28 Jul 24, 04:30 PM IST
                                    <br />
                                    <strong>End:</strong> 28 Jul 24, 10:00 PM IST
                                </>
                            ),
                            subtitle: "Final Presentation",
                            description: (
                                <>
                                    The top 10 teams will have the opportunity to present their work and compete for the title of Hack&apos;Ndore champions.
                                </>
                            ),
                            bgClass: "bg-purple-700",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {item.icon}
                            <h2 className={`${item.bgClass} text-white py-2 px-4 rounded-full font-bold mb-4`}>
                                {item.title}
                            </h2>
                            <div className='mb-5'>
                                {item.dates}
                            </div>
                            <h3 className="font-bold mb-2">{item.subtitle}</h3>
                            <p className="text-center">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegistrationProcess;
