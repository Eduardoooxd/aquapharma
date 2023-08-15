'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton: FunctionComponent = () => {
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
            className={`${
                visible ? 'block' : 'invisible'
            } group fixed bg-aquapharma-blue bottom-10 right-10 aspect-square w-10 rounded-lg flex justify-center items-center `}
        >
            <FaArrowUp className="group-hover:scale-125 transition duration-300 text-white w-full " />
        </button>
    );
};

export default GoToTopButton;
