import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSrc from '../assets/logo-video.mp4';

const Welcome = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mark that the user has seen the welcome page
    localStorage.setItem('hasSeenWelcome', 'true');
    
    // Auto-navigate to home after video ends or 5 seconds (whichever comes first)
    const video = videoRef.current;
    let timer: NodeJS.Timeout;

    const handleVideoEnd = () => {
      navigate('/home');
    };

    if (video) {
      video.play().catch(e => console.error('Error playing video:', e));
      video.addEventListener('ended', handleVideoEnd);
    } else {
      // Fallback in case video fails to load
      timer = setTimeout(() => {
        navigate('/home');
      }, 5000);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
      if (timer) clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl w-full px-4">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          className="w-full h-auto max-w-2xl mx-auto"
          onEnded={() => navigate('/home')}
          onError={(e) => {
            console.error('Video error:', e);
            navigate('/home');
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Welcome;
