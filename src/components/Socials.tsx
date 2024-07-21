// components/Socials.tsx
import React from 'react';
import { socials } from '../../public/socials';
import Image from 'next/image';

const Socials: React.FC = () => {
  return (
    <div className="text-white text-[0.75rem] md:text-[1rem] flex items-center justify-start flex-wrap gap-4 px-[10vw] ">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 md:w-28"
        >
          <div className="p-2 flex items-center justify-center gap-2">
            <Image src={social.svg} alt={`${social.name} logo`} width={24} height={24} />
            <div className="">{social.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
