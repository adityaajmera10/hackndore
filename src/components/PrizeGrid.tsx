import React from 'react';
import first from '../../public/1st.svg'
import second from '../../public/2nd.svg'
import third from '../../public/3rd.svg'
import Image from 'next/image'


const PrizeDisplay = () => {
  const prizes = [
    { title: 'First Runner UP', amount: '1,00,000', trophy: first, color: 'from-orange-400 to-red-500' },
    { title: 'Winner', amount: '1,50,000', trophy: second, color: 'from-yellow-300 to-yellow-500' },
    { title: 'Second Runner UP', amount: '50,000', trophy: third, color: 'from-blue-300 to-blue-400' },
  ];

  return (
    <div className="bg-black p-8 flex justify-center items-end space-x-4">
      {prizes.map((prize, index) => (
        <div key={index} className={`flex flex-col items-center ${index === 1 ? 'mb-4' : ''}`}>
          <div className={`w-24 h-24 md:w-32 md:h-32 ${index === 1 ? 'w-28 h-28 md:w-36 md:h-36' : ''} rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-3`}>
            <div className={`text-4xl md:text-5xl ${index === 1 ? 'text-5xl md:text-6xl' : ''}`}>
              <Image src={prize.trophy}/>
            </div>
          </div>
          <h3 className="text-gray-300 text-sm md:text-base text-center">{prize.title}</h3>
          <p className="text-white font-bold text-lg md:text-xl">{prize.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default PrizeDisplay;