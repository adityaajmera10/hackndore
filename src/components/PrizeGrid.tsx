import React from 'react';
import first from '../../public/1st.svg'
import second from '../../public/2nd.svg'
import third from '../../public/3rd.svg'
import Image from 'next/image'
import { Turret_Road } from "next/font/google";
export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const PrizeDisplay = () => {
  const prizes = [
    { title: 'First Runner UP', amount: '1,00,000', trophy: second, color: 'from-orange-400 to-red-500' },
    { title: 'Winner', amount: '1,50,000', trophy: first, color: 'from-yellow-300 to-yellow-500' },
    { title: 'Second Runner UP', amount: '50,000', trophy: third, color: 'from-blue-300 to-blue-400' },
  ];
  const schoolPrizes=[
    { title: 'Winner(School Team)', amount: '25,000', trophy: first, color: 'from-yellow-300 to-yellow-500' },
    { title: 'First Runner-Up (School Team)', amount: '15,000', trophy: second, color: 'from-orange-400 to-red-500' },
  ]
  const specialPrizes=[
    {title: 'Special Prizes' , amount: 'Six Categories of 10000 each. Trophy, Certificate, Winners Kit'}
  ]

  return (
    <div>
        <h1 className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}>Prizes</h1>
    <div className="p-8 flex justify-center items-end space-x-4">
      {prizes.map((prize, index) => (
        <div key={index} className={`flex flex-col items-center ${index === 1 ? 'mb-6' : ''}`}>
          <div className={`w-24 h-24 md:w-48 md:h-48 ${index === 1 ? 'w-28 h-28 md:w-54 md:h-54' : ''} rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-3`}>
            <div className={`text-4xl md:text-5xl ${index === 1 ? 'text-5xl md:text-6xl' : ''}`}>
              <Image src={prize.trophy} alt={prize.title}/>
            </div>
          </div>
          <h3 className="text-gray-300 text-sm md:text-lg text-center">{prize.title}</h3>
          <p className="text-white font-bold text-lg md:text-2xl">{prize.amount}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PrizeDisplay;