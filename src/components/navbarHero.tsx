import React, { useState, useEffect } from "react";
import NavigationButton from "./navigationButton";
import Link from "next/link";

const NavbarHero: React.FC = () => {
    const [navVisibility, setNavVisibility] = useState(false);

    const handleNavVisibility = () => {
        setNavVisibility(!navVisibility);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.01) {
                setNavVisibility(true);
            } else {
                setNavVisibility(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`absolute top-0 w-full h-20 md:h-20 flex flex-row justify-between xl:justify-between items-center bg-pitahaya-ligh-grey text-pitahaya-black px-5 xl:px-24  py-2  z-10 "
            }`}
        >
            <Link legacyBehavior href="/" as="/">
                <img
                    className="cursor-pointer"
                    width={150}
                    src="https://store.brth.uk/pitahaya/Pitahaya%20Labs%20-%20Logo%20png.png"
                    alt="Pitahaya Labs Logo"
                />
            </Link>
            <div className="hidden xl:flex flex-row items-center">
                <div className="flex flex-row items-center gap-16 font-bold">
                    <Link legacyBehavior href="/" as="/">
                        <h3 className="text-pitahaya-black cursor-pointer  transition duration-300 transform hover:scale-105">Home</h3>
                    </Link>
                    <Link legacyBehavior href="/#about" as="/#about">
                        <h3 className="text-pitahaya-black cursor-pointer transition duration-300 transform hover:scale-105">About</h3>
                    </Link>
                    <Link legacyBehavior href="/#ourservice" as="/#ourservice">
                        <h3 className="text-pitahaya-black cursor-pointer transition duration-300 transform hover:scale-105">Our Service</h3>
                    </Link>
                    <Link legacyBehavior href="/#testimonials" as="/#testimonials">
                        <h3 className="hidden lg:block text-pitahaya-black cursor-pointer transition duration-300 transform hover:scale-105">Testimonials</h3>
                    </Link>
                    <Link legacyBehavior href="/#contact" as="/#contact">
                        <a className="bg-pitahaya-black cursor-pointer text-pitahaya-white hidden xl:flex flex-col justify-center items-center text-center px-4 py-2 rounded-md  h-12 lg:w-44 hover:cursor-pointer transition duration-300 transform hover:scale-110">
                            <h3>Get in touch</h3>
                        </a>
                    </Link>
                </div>
            </div>
            <NavigationButton onTouch={handleNavVisibility} />
        </nav>
    );
};

export default NavbarHero;
