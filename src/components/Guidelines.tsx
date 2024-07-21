import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const Guidelines = () => {
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
                staggerChildren: 0.1
            }
        }
    };

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

    const guidelines = [
        "Open to students pursuing B.Tech/B.E./BCA/M.Tech/M.S/MCA or related Engineering Programs across ALL Engineering Colleges in India, with a special category for High School Students.",
        "Teams must consist of a minimum 3 members to a maximum of 5 members.",
        "Cross-specialization teams are eligible.",
        "Teams can form across different academic years.",
        "Cross-campus teams are allowed.",
        "One person cannot be a member of more than one team.",
        "Any deviation from the above will result in immediate disqualification of the entire team."
    ];

    return (
        <motion.div
            ref={ref}
            className='mt-24 mb-16 p-10 w-11/12 mx-auto  backdrop-blur-sm'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h1 
                className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
                variants={itemVariants}
            >
                Guidelines
            </motion.h1>
            <motion.ul className="space-y-4">
                {guidelines.map((guideline, index) => (
                    <motion.li 
                        key={index}
                        className="flex items-start"
                        variants={itemVariants}
                    >
                        <span className="mr-2 mt-1 text-primary-heading">•</span>
                        <span>{guideline}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default Guidelines;