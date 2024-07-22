import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from 'next/font/google';

export const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

const Guidelines = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guidelines = [
    {
      title: 'Team Formation',
      items: [
        'Teams must consist of 3 to 5 members.',
        'Cross-specialization teams are encouraged, spanning different academic years and institutions.',
      ],
    },
    {
      title: 'Project Scope',
      items: ['Details to be provided.'],
    },
    {
      title: 'Dress Code',
      items: [
        'Participants should dress in decent casual attire.',
        'Shorts are not permitted.',
        'Participants are requested to carry formal attire for the presentation ceremony.',
      ],
    },
    {
      title: 'Venue and Duration',
      items: [
        'Participants will not be allowed to leave the venue from 26/07/2024 8:00 hrs to 28/07/2024 18:00 hrs without leaving.',
      ],
    },
    {
      title: 'Conduct',
      items: [
        'Any form of indiscipline or disruptive behaviour will result in immediate action.',
      ],
    },
    {
      title: 'Equipment',
      items: ['Participants are advised to bring their own devices.'],
    },
    {
      title: 'Personal Belongings',
      items: [
        'Participants are responsible for their belongings; the organizing committee is not liable for any loss or theft.',
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="mt-24 mb-16 p-10 w-11/12 md:w-9/12 mx-auto backdrop-blur-sm"
    >
      <h1
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
      >
        Guidelines
      </h1>
      <ul className="space-y-8 md:ml-16">
        {guidelines.map((guideline, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-start "
          >
            <span className="font-bold mb-2 w-48 ">{guideline.title}</span>
            <ul className="space-y-2 list-disc">
              {guideline.items.map((item, idx) => (
                <li key={idx} className="">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guidelines;
