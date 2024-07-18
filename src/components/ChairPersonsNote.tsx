import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import Image from 'next/image';
import rudawat from '../../public/rajesh.svg'; // Assuming you have this image


export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const ChairmansAddress = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
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
        "Hackndore Hackathon, organized by the Indore Municipal Corporation is a pivotal event driving innovation and technological advancement in our city. I am delighted to witness the convergence of exceptional talent and ideas aimed at tackling urban challenges head-on.",
        "This event exemplifies our dedication to positioning Indore as a leader in smart city initiatives. By bringing together participants from diverse backgrounds, we foster collaboration on transformative solutions for our urban landscape. This collective effort underscores the power of community-driven innovation.",
       "I eagerly anticipate the innovative projects that will emerge from this event and the positive transformations they will bring to our city. Together, let's forge a smarter, greener, and more inclusive Indore."
    ];

    return (
        <motion.div
            ref={ref}
            className='pt-8 pb-16 w-11/12 mx-auto px-5 bg-white/10 backdrop-blur-sm'
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h1 
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading text-center ${turret.className} pb-5`}
                variants={textVariants}
            >
                Chairman&apos;s Keynote
            </motion.h1>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                <motion.div className="md:w-1/3 mb-8 md:mb-0 md:-mt-16" variants={imageVariants}>
                    <Image 
                        src={rudawat}
                        alt="Chairman Rajesh Udawat"
                        className="rounded-3xl border mx-auto sm:mt-10 overflow-hidden h-[300px] w-[200px] "
                    />
                    <motion.h2 className="text-xl font-bold mt-4 text-center" variants={textVariants}>Rajesh Udawat</motion.h2>
                    <motion.p className="text-center text-gray-400" variants={textVariants}>Chairman, Planning & IT Department<br/> Indore Municipal Corporation</motion.p>
                </motion.div>
                <motion.div className="md:w-2/3  md:-mt-10 md:pl-5" variants={textVariants}>
                    <motion.p className="mb-3 text-gray-100 text-sm"  variants={textVariants}>
                        {visionPoints.map((point, index) => (
                            <span key={index} >{point}  <br /><br /></span>
                        ))}
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ChairmansAddress;
