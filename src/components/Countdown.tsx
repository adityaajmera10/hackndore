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
        <div className='pt-10 sm:pb-12'>
            <h1 className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}>
                Countdown
            </h1>
            <div className="flex items-center justify-center gap-5 backdrop-blur-sm">
                {[
                    { label: 'Days', value: days },
                    { label: 'Hours', value: hours },
                    { label: 'Minutes', value: minutes },
                    { label: 'Seconds', value: seconds }
                ].map((item) => (
                    <div key={item.label} className='flex-col mt-10'>
                        <p className={`text-3xl text-center ${turret.className}`}>
                            {item.value}
                        </p>
                        <p>{item.label}:</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;
