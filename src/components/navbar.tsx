import React, {useState} from "react";
import NavigationButton from "./navigationButton";
import Link from "next/link";

const Navbar: React.FC = () => {

    const [navVisibility, setNavVisibility] = useState(true);

    const handleNavVisibility = () => {
        setNavVisibility(!navVisibility);
    }

    return (
        <nav className={`fixed  w-full h-16 md:h-20 flex flex-row justify-between items-center bg-pitahaya-white text-pitahaya-black px-3 py-2 drop-shadow-md  z-10 `}>
            <Link legacyBehavior href="/" as="/">
                <h2 className="logo">Pitahaya</h2>
            </Link>
            <NavigationButton onTouch={handleNavVisibility} />
        </nav>
    );
};

export default Navbar;

