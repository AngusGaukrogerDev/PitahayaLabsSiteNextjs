import React, { useState, useEffect } from "react";
import NavigationButton from "./navigationButton";

const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        // console.log(currentScrollPos);
        if (currentScrollPos >= 250) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        const handleScrollThrottled = () => {
            // Throttle the scroll event to improve performance
            clearTimeout(handleScrollThrottled.timer);
            handleScrollThrottled.timer = setTimeout(() => {
                handleScroll();
            }, 100);
        };

        window.addEventListener("scroll", handleScrollThrottled);

        return () => window.removeEventListener("scroll", handleScrollThrottled);
    }, [prevScrollPos]);

    return (
        <nav className={`hero-bg-image fixed w-full flex flex-row justify-between bg-pitahaya-white text-pitahaya-black px-5 py-2 mt-3 rounded-xl ${visible ? 'hidden' : 'top-0'}`}>
            {/* Additional className to control visibility */}
            <span>Pitahaya Labs</span>
            <NavigationButton />
        </nav>
    );
};

export default Navbar;
