import React from 'react';

interface TimelineStepProps {
  label: string;
  description?: string;
}

interface TimelineProps {
  steps: TimelineStepProps[];
}

const TimelineStep = ({ label, description }: TimelineStepProps) => {
  return (
    <div className="timeline-step">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3 className="timeline-label">{label}</h3>
        {description && <p className="timeline-description">{description}</p>}
      </div>
    </div>
  );
};

const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <TimelineStep key={index} {...step} />
      ))}
    </div>
  );
};

export default Timeline;
