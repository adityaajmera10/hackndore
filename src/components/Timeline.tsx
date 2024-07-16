import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Turret_Road } from 'next/font/google';

const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

export default function CustomTimeline() {
  return (
    <>
      <h1 className={`text-2xl text-center md:text-5xl font-bold mb-5 ${turret.className} text-primary-heading `}>Timeline</h1>
      <Timeline position="alternate-reverse">
        {/* Item 1 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex flex-col items-end  justify-end">
              <div className="w-28  md:text-2xl text-xl text-right">20-07-24</div>
              <div className='text-right md:text-xl'>Final date for registration and presentation submission</div>
            </div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex flex-col md:flex-ro justify-start">
              <div className="w-28  text-xl  md:text-2xl ">23-07-24</div>
              <div className='text-left md:text-xl'>Announcement of shortlisted teams and invitations</div>
              
            </div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex flex-col items-end  justify-end">
              <div className="w-28 md:text-2xl text-xl  ">26-07-24</div>
              <div className='text-right md:text-xl'>Offline registration and commencement of competition</div>
           </div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 4 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div className="flex flex-col  justify-start">
              <div className="w-28  text-xl  md:text-2xl ">28-07-24</div>
              <div className='text-left md:text-xl'>Conclusion of competition and closing ceremony</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
