import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import { WavyBackground } from './ui/wavy-background'; // Adjust the import path as needed

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

interface CountdownProps {
    targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(intervalId);
                setTimeLeft(0);
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

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

    return (
        <WavyBackground
            className="py-10 sm:py-12 px-10"
            containerClassName="h-screen"
            colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
            waveWidth={100}
            backgroundFill="#000"
            blur={10}
            speed="slow"
            waveOpacity={0.5}
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h1 
                    className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}
                    variants={itemVariants}
                >
                    Countdown
                </motion.h1>
                <div className="flex items-center justify-center gap-5 flex-wrap">
                    {[
                        { label: 'Days', value: days },
                        { label: 'Hours', value: hours },
                        { label: 'Minutes', value: minutes },
                        { label: 'Seconds', value: seconds }
                    ].map((item) => (
                        <motion.div key={item.label} className='flex-col mt-10' variants={itemVariants}>
                            <motion.p className={`text-3xl text-center ${turret.className}`} variants={itemVariants}>
                                {item.value}
                            </motion.p>
                            <motion.p variants={itemVariants}>{item.label}</motion.p>
                        </motion.div>
                    ))}
                </div>
                <motion.div className='flex-col mt-10' variants={itemVariants}>
                    <motion.p className={`text-xl sm:text-3xl text-center ${turret.className}`} variants={itemVariants}>
                        Last Date to register on Unstop is 20-07-24 
                    </motion.p>
                </motion.div>
            </motion.div>
        </WavyBackground>
    );
};

export default Countdown;