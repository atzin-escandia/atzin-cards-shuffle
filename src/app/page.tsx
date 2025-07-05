'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from '@/components/Card';
import { CARDS_DATA } from '@/lib';

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={containerRef} className="relative mt-[50vh]">
      {CARDS_DATA.map((project, i) => {
        const targetScale = 1 - (CARDS_DATA.length - i) * 0.05;

        return (
          <Card
            key={`card_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
