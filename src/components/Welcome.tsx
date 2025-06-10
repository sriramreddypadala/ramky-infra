import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Video path from public directory
const videoSrc = '/media/logo animated video.mp4';

const Welcome = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Mark that the user has seen the welcome page
    localStorage.setItem('hasSeenWelcome', 'true');
    
    // Auto-navigate to home after video ends or 5 seconds (whichever comes first)
    const video = videoRef.current;
    let timer: NodeJS.Timeout;

    const navigateToHome = () => {
      navigate('/home', { replace: true });
    };

    const handleVideoEnd = () => {
      navigateToHome();
    };

    if (video && !hasError) {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing video:', error);
          setHasError(true);
        });
      }
      
      video.addEventListener('ended', handleVideoEnd);
    } else {
      // Fallback in case video fails to load
      timer = setTimeout(() => {
        navigateToHome();
      }, 5000);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
      if (timer) clearTimeout(timer);
    };
  }, [navigate, hasError]);

  // If there's an error with the video, show a simple welcome message
  if (hasError) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Ramky Infra</h1>
        <p className="mb-6">Experience the future of luxury living</p>
        <button 
          onClick={() => navigate('/home', { replace: true })}
          className="px-6 py-2 bg-luxury-gold text-luxury-navy font-semibold rounded-md hover:bg-opacity-90 transition-colors"
        >
          Enter Site
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl w-full px-4">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-auto"
            preload="auto"
            onEnded={() => navigate('/home', { replace: true })}
            onError={(e) => {
              console.error('Video error:', e);
              const video = e.target as HTMLVideoElement;
              console.error('Video error details:', video.error);
              setHasError(true);
            }}
            onCanPlay={(e) => {
              console.log('Video can play');
              const video = e.target as HTMLVideoElement;
              video.play().catch(error => {
                console.error('Autoplay error:', error);
              });
            }}
          >
            <source 
              src={videoSrc} 
              type="video/mp4" 
              key="video-source"
              onError={(e) => console.error('Source error:', e)}
            />
            Your browser does not support the video tag.
          </video>
          {!hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse text-white text-lg">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
