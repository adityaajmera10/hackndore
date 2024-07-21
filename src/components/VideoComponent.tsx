import React, { useRef, useEffect } from 'react';

interface VideoComponentProps {
  src: string;
  onComplete: () => void;
  className: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, onComplete, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', onComplete);
      videoElement.play();
      return () => {
        videoElement.removeEventListener('ended', onComplete);
      };
    }
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center h-screen">
      <video ref={videoRef} src={src} className={`h-screen w-full ${className}`} autoPlay playsInline muted controls={false} />
    </div>
  );
};

export default VideoComponent;
