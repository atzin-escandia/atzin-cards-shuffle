'use client';

import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-10 fixed top-0 w-full">
            <a
                href="https://www.atzinescandia.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-all duration-300 text-3xl"
            >
                <Image
                    src="https://cdn.jsdelivr.net/gh/atzin-escandia/video-assets/logo-atzin-white.svg"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="w-[100px] md:w-[120px] z-10 relative"
                />
            </a>
            <a
                href="https://github.com/atzin-escandia/atzin-cards-shuffle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-all duration-300 text-2xl"
            >
                Github
            </a>
        </header>
    );
}
