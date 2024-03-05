import React, {useState} from "react";
import NavigationButton from "./navigationButton";

import Link from "next/link";

const Navbar: React.FC = () => {

    const [navVisibility, setNavVisibility] = useState(true);

    const handleNavVisibility = () => {
        setNavVisibility(!navVisibility);
    }

    return (
        <nav className={`fixed w-full h-20 md:h-20 flex flex-row justify-between xl:justify-between items-center bg-pitahaya-white text-pitahaya-black px-5 xl:px-16  py-2 drop-shadow-md z-10 `}>
            <Link legacyBehavior href="/" as="/">
                <h2 className="logo">Pitahaya</h2>
            </Link>
            <div className="hidden xl:flex flex-row items-center">
                <div className="flex flex-row items-center gap-10">
                    <Link legacyBehavior href="/" as="/">
                        <h3 className="text-pitahaya-black cursor-pointer hover:text-pitahaya-yellow">Home</h3>
                    </Link>
                    <Link legacyBehavior href="/#about" as="/#about">
                        <h3 className="text-pitahaya-black cursor-pointer hover:text-pitahaya-yellow">About</h3>
                    </Link>
                    <Link legacyBehavior href="/#ourservice" as="/#ourservice">
                        <h3 className="text-pitahaya-black cursor-pointer hover:text-pitahaya-yellow">Our Service</h3>
                    </Link>
                    <Link legacyBehavior href="/#testimonials" as="/#testimonials">
                        <h3 className="hidden lg:block text-pitahaya-black cursor-pointer hover:text-pitahaya-yellow">Testimonials</h3>
                    </Link>
                </div>
               
               
            </div>
            <Link legacyBehavior href="/#contact" as="/#contact">
                    <a  className="bg-pitahaya-black cursor-pointer text-pitahaya-white hidden xl:flex flex-col justify-center items-center text-center px-4 py-2 rounded-xl  h-12 lg:w-44 hover:cursor-pointer hover:bg-pitahaya-yellow-600">
                      <h3>Get in touch</h3>
                    </a>
                </Link>
            <NavigationButton onTouch={handleNavVisibility} />
        </nav>
    );
};

export default Navbar;

