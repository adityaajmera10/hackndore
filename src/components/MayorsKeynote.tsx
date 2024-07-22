import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import Image from 'next/image';

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

interface LeaderData {
    name: string;
    title: string;
    image: string;
    quote: string;
    vision: string;
    slogan: string;
}

const LeaderTemplate: React.FC<LeaderData> = ({ name, title, image, quote, vision, slogan }) => {
    return (
        <motion.div className="flex flex-col md:flex-row items-start justify-between mb-16">
            <motion.div className="md:w-1/3 mb-8 md:mb-0" >
                <Image 
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="rounded-3xl border mx-auto max-h-[400px] object-cover"
                />
            </motion.div>
            <motion.div className="md:w-2/3 text-left pl-0 md:pl-8" >
                <h2 className="text-2xl font-bold text-primary-heading text-center md:text-left">{name}</h2>
                <p className="text-gray-400 mb-4 text-center md:text-left">{title}</p>
                <p className="mb-4 text-gray-100 text-base">{quote}</p>
                <p className="mb-4 text-gray-100 text-base hidden md:block">{vision}</p>
                <p className="italic text-gray-100 text-lg font-light">{slogan}</p>
            </motion.div>
        </motion.div>
    );
};

const leadershipData: LeaderData[] = [
    {
        name: "Pushyamitra Bhargav",
        title: "Mayor, Indore Municipal Corporation",
        image: "/pbhargav.jpg",
        quote: "The Hackndore Hackathon is our flagship digital initiative, designed to position Indore at the forefront of technological innovation. This event embodies our commitment to harnessing the power of technology for urban development and citizen welfare.",
        vision: "Our vision is to create a vibrant ecosystem where brilliant minds converge to tackle real-world urban challenges. Through this hackathon, we aim to foster a culture of innovation, promote sustainable solutions, and accelerate Indore's transformation into a smart city. By bringing together diverse talents from various fields, we're not just solving problems; we're building a community of innovators who will shape the future of our city.",
        slogan: "Let's innovate, collaborate, and build a Sustainable Indore together."
    },
    {
        name: "Rajesh Udawat",
        title: "Chairman, Planning & IT Department, Indore Municipal Corporation",
        image: "/rajesh.svg",
        quote: "The Hackndore Hackathon exemplifies our dedication to positioning Indore as a leader in smart city initiatives. This event is a testament to our belief in the power of collaborative problem-solving and technological innovation.",
        vision: "Our department envisions Indore as a city where technology seamlessly integrates with urban infrastructure to enhance the quality of life for all citizens. Through this hackathon, we're creating a platform for innovators to address critical urban challenges, from traffic management to waste reduction, from energy efficiency to citizen services. We believe that by fostering local talent and promoting tech-driven solutions, we can create a model for sustainable urban development that can be replicated across India.",
        slogan: "Together, let's forge a smarter, greener, and more inclusive Indore."
    },
];

const LeadershipVision: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
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

    return (
        <motion.div
            ref={ref}
            className='mt-16 pt-8 pb-16 w-11/12 mx-auto px-5 backdrop-blur-sm'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h1 
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading text-center ${turret.className} pb-5 md:pb-14`} 
            >
                Leadership Vision
            </motion.h1>
            {leadershipData.map((leader, index) => (
                <motion.div key={index} >
                    <LeaderTemplate {...leader} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default LeadershipVision;