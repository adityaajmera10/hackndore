import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import Image from 'next/image';
import pbhargav from '../../public/pbhargav.jpg'
import ScrambleTextMayor from '@/components/ScrambleTextMayor'

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const MayorsKeynote = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3, // Adjust this value to 0.3 for 30% visibility
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const visionPoints = [
        "Positioning Indore as a leader in technological advancement",
        "Fostering community collaboration and innovation",
        "Promoting sustainability and environmental stewardship",
        "Creating a smarter, more inclusive city",
        "Encouraging groundbreaking solutions to urban challenges"
    ];

    return (
        <motion.div
            ref={ref}
            className='mt-16 pt-8 pb-16 w-11/12 mx-auto px-5 bg-white/10 backdrop-blur-sm'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h1 
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading text-center ${turret.className} pb-5`}
                variants={textVariants} 
            >
                Mayor&apos;s Vision
            </motion.h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div className="md:w-1/3 mb-8 md:mb-0" variants={imageVariants}>
                    <Image 
                        src={pbhargav}
                        alt="Mayor Pushyamitra Bhargav"
                        width={300}
                        height={300}
                        className="rounded-3xl border mx-auto mt-5 sm:mt-10"
                    />
                    <motion.h2 className="text-xl font-bold mt-4 text-center" variants={textVariants}>Pushyamitra Bhargav</motion.h2>
                    <motion.p className="text-center text-gray-400" variants={textVariants}>Mayor, Indore Municipal Corporation</motion.p>
                </motion.div>
                <motion.div className="md:w-2/3" variants={textVariants}>
                    <motion.p className="mb-6 text-gray-100" variants={textVariants}>
                        The Hackndore Hackathon is a digital initiative by the Indore Municipal Corporation, aiming to position Indore as a technology leader. We bring together brilliant minds to innovate and address urban challenges through collaboration and sustainability.
                    </motion.p>
                    <motion.h3 className="text-xl font-bold mb-4 text-primary-heading" variants={textVariants}>Key Points:</motion.h3>
                    <motion.ul className="space-y-2" variants={listVariants}>
                        {visionPoints.map((point, index) => (
                            <motion.li 
                                key={index}
                                className="flex items-start text-gray-200"
                                variants={listItemVariants}
                            >
                                <span className="mr-2 mt-1 text-primary-heading">•</span>
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div className="pt-8 sm:pt-10 text-center" variants={textVariants}>
                        <p className="italic text-gray-100 text-center text-xl md:text-[1.5rem]  font-light">
                        &quot;Let&apos;s innovate, collaborate, and build a <ScrambleTextMayor/> Indore together.&quot;
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MayorsKeynote;
