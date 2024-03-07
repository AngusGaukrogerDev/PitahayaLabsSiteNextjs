import React, {useState} from "react";
import NavigationButton from "./navigationButton";

import Link from "next/link";

const Navbar: React.FC = () => {

    const [navVisibility, setNavVisibility] = useState(true);

    const handleNavVisibility = () => {
        setNavVisibility(!navVisibility);
    }

    return (
        <nav className={`fixed w-full h-20 md:h-20 flex flex-row justify-between xl:justify-between items-center bg-pitahaya-white text-pitahaya-black px-5 xl:px-16  py-2  z-10 `}>
            <Link legacyBehavior href="/" as="/">
                <h2 className="logo cursor-pointer">Pitahaya</h2>
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
                    <a  className="bg-pitahaya-black cursor-pointer text-pitahaya-white hidden xl:flex flex-col justify-center items-center text-center px-4 py-2 rounded-md  h-12 lg:w-44 hover:cursor-pointer transition duration-300 transform hover:scale-110">
                      <h3>Book a call</h3>
                    </a>
                </Link>
                </div>
               
               
            </div>
            
            <NavigationButton onTouch={handleNavVisibility} />
        </nav>
    );
};

export default Navbar;

