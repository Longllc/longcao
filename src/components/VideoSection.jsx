import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function VideoSection({ src, title }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.6 });

  const setRefs = (node) => {
    inViewRef(node);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView && !ended) {
      video.play();
      setStarted(true);
    } else {
      video.pause();
    }
  }, [inView, ended]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setEnded(true);
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  const handleReplay = () => {
    setEnded(false);
    videoRef.current.play();
  };

  return (
    <section
      ref={setRefs}
      className="snap-start relative h-screen w-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full max-w-[100%] aspect-[2.39/1]">
        <video
          ref={videoRef}
          src={src}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded"
          muted
          playsInline
          preload="auto"
          controls={false}
        />

        {ended && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/40 text-white text-2xl"
            onClick={handleReplay}
          >
            Click to Replay
          </div>
        )}

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 text-base bg-black/60 px-4 py-1 rounded">
          {title}
        </div>
      </div>
    </section>
  );
}
