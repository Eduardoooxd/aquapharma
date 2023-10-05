'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
    const OFFSET_TO_VISIBLE = 20;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        setVisible(window.scrollY > OFFSET_TO_VISIBLE);
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'group fixed bottom-10 right-10 flex aspect-square w-10 items-center justify-center rounded-lg bg-aquapharma-blue transition-opacity animate-in ',
                visible ? 'opacity-100' : 'opacity-0'
            )}
        >
            <FaArrowUp className="w-full text-white group-hover:scale-125 " />
        </button>
    );
};

export default GoToTopButton;
