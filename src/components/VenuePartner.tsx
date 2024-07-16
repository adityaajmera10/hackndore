import React from 'react'
import { Turret_Road } from 'next/font/google';

const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

export default function VenuePartner() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <h1         className={`pt-24 text-2xl text-center md:text-5xl font-bold  ${turret.className} text-primary-heading`}
        >Venue Partner</h1>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.893246935181!2d75.94263188998197!3d22.82040509113712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf455b4cec3%3A0x426141aa8141f7a5!2sAcropolis%20Institute%20Of%20Technology%20And%20Research%20-%20AITR!5e0!3m2!1sen!2sin!4v1721172607895!5m2!1sen!2sin" className='h-96 w-[80vw] max-w-[30rem] rounded-3xl' loading="lazy"></iframe>
        </div>
        <h2 className='w-10/12 text-center md:text-xl'>Acropolis Institute Of Technology And Research - AITR(Indore)</h2>
    </div>
  )
}
