import React from 'react';
import Image from 'next/image';
import { Turret_Road } from 'next/font/google';


export const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});
import { partners } from './../../public/partners';
import geek from '../../public/partner-logo/geek.svg'

const PartnersSection: React.FC = () => {
  return (
    <div className="md:w-11/12 mx-auto">
      <h2 className={`text-3xl md:text-5xl font-bold py-10 text-primary-heading text-center   ${turret.className}`}>
              Technical Partner
            </h2>
      <div className="flex items-center justify-center pb-16">
            <Image src={geek} alt={"geek"} width={300} height={100} objectFit="contain" className={`scale-150`} />
           
        </div>          
      {partners.map((partnerCategory, index) => (
        <div key={index} className="mb-12">
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-5xl font-bold text-primary-heading   ${turret.className}`}>
              {partnerCategory.type}
            </h2>
          </div>
          <div className="mx-auto gap-y-5 flex justify-center items-center flex-wrap md:px-4">
            {partnerCategory.partners.map((partner, id) => (
              <div
                className="mx-4 p-4 bg-white/10 h-[200px] w-[40vw]  md:w-[200px]  rounded-lg flex flex-col justify-center items-center"
                key={id}
                
              >
                <div className='h-32 flex items-center justify-center'>
                <Image src={partner.logo} alt={partner.name} width={100} height={100} objectFit="contain" className={` ${partner.className}`} />
                </div>
                <h3 className="text-white mt-4 text-center">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
