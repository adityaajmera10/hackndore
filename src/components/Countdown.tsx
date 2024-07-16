import { useState, useEffect } from 'react';
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

interface CountdownProps {
    targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(0);

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

    return (
        <div className='pb-96'>
            <h1 className={`text-2xl text-center md:text-5xl font-bold ${turret.className}`}>Countdown</h1>
            <div className="flex items-center justify-center gap-5">
                <div className='flex-col mt-10 '>
                    <p className={`text-3xl text-center ${turret.className}`}>{days} </p>
                    <p>Days: </p>
                </div>
                <div className='flex-col mt-10'>
                    <p className={`text-3xl text-center ${turret.className}`}>{hours} </p>
                    <p>Hours: </p>
                </div>
                <div className='flex-col mt-10'>
                    <p className={`text-3xl text-center ${turret.className}`}>{minutes} </p>
                    <p>Minutes: </p>
                </div>
                <div className='flex-col mt-10'>
                    <p className={`text-3xl text-center ${turret.className}`}>{seconds} </p>
                    <p>Seconds: </p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
