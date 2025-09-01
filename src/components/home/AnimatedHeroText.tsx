'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const services = ['Marketing', 'Designs', 'Websites', 'Growth'];

export default function AnimatedHeroText() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in-2 slide-in-from-bottom-8 duration-1000">
      Weaving Digital{' '}
      <span
        key={animationKey}
        className="inline-block animate-fade-in-out text-primary"
      >
        {services[currentServiceIndex]}
      </span>{' '}
      into Reality
    </h1>
  );
}
