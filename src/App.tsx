import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useTranslation } from './hooks/useTranslation';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { OurPhilosophy } from './components/sections/OurPhilosophy';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { t, language, toggleLanguage } = useTranslation();

  if (!t) return null;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#222831] text-white overflow-hidden">
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <Hero t={t} y={y} />
      <div className="relative z-10">
        <WhyChooseUs t={t} opacity={opacity} />
        <OurPhilosophy t={t} />
        <Services t={t} />
        <Contact t={t} />
      </div>
      <Footer t={t} />
      
      <style>
        {`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(219, 192, 120, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(219, 192, 120, 0.1) 1px, transparent 1px);
            background-size: 32px 32px;
          }
        `}
      </style>
    </div>
  );
}

export default App;