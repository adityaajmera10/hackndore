// components/InfiniteSlider.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import devArmy from '../../public/partner-logo/devArmy.svg';
import Edavv from '../../public/partner-logo/Edavv.svg';
import ipsTechClub from '../../public/partner-logo/ipsTechClub.svg';
import puneDev from '../../public/partner-logo/puneDev.svg';
import swapSo from '../../public/partner-logo/swapSo.svg';



const partnersData = [
  { name: "Dev Army", logo: devArmy },
  { name: "Edavv", logo: Edavv },
  { name: "IPS Tech Club", logo: ipsTechClub },
  { name: "Pune Dev", logo: puneDev },
  { name: "SwapSo", logo: swapSo},
];

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstElement = slider.children[0] as HTMLElement;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    let startPosition = 0;

    const animate = () => {
      startPosition -= 2; // Adjust the speed by changing the value
      if (startPosition <= -firstElement.clientWidth) {
        slider.appendChild(firstElement);
        startPosition += firstElement.clientWidth;
      }
      slider.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {partnersData.map((partner, index) => (
          <div className="slide" key={index}>
            <Image src={partner.logo} alt={partner.name} className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
