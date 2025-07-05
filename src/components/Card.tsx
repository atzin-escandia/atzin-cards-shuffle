'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CardProps {
    i: number;
    id: string;
    title: string;
    subtitle: string;
    image: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card: React.FC<CardProps> = ({
    i,
    title,
    subtitle,
    image,
    color,
    progress,
    range,
    targetScale,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={containerRef}
            className="h-screen flex items-center justify-center sticky top-0 mx-5"
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="relative flex flex-col h-[600px] w-[1000px] rounded-2xl md:rounded-[80px] px-12 py-12 border border-black origin-top"
            >
                <h2 className="text-center text-5xl md:text-8xl font-serif">{title}</h2>
                <div className="md:flex h-full mt-5 gap-5">
                    <div className="relative  md:w-2/3 h-[250px] md:h-full rounded-3xl overflow-hidden border border-black">
                        <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                            <Image
                                fill
                                src={image}
                                alt={title}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                    <div className="md:w-1/3 mt-10 md:mt-0 flex flex-col items-center justify-evenly text-center md:pl-5">
                        <p className="text-sm md:text-lg font-extralight">{subtitle}</p>
                        <Link
                            href="/"
                            className="mt-10 text-base font-semibold underline hover:opacity-80 transition-opacity"
                        >
                            Show me more
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
