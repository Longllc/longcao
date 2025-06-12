import React from 'react';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ArtworkGallery from './components/ArtworkGallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      <HeroSection />
      <VideoSection src="/videos/video2.mp4" title="Project: LONG WAY HOME" />
      <VideoSection src="/videos/video3.mp4" title="Project: Title Sequence" />
      <VideoSection src="/videos/video4.mp4" title="Project: Run Dog Run" />
      <ArtworkGallery />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
