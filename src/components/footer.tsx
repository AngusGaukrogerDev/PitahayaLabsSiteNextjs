'use-client'

import Link from "next/link";
import MediaIcons from "./mediaIcons";

const Footer = () => {
    return(
        <footer className="w-full footer-height flex flex-col justify-center items-center gap-5 bg-pitahaya-white">
            <Link legacyBehavior href="/" as="/">
                <h3 className="cursor-pointer text-2xl font-bold">© Pitahaya Labs - {new Date().getFullYear()}</h3>   
            </Link>
            <MediaIcons />
        </footer>
    );
}
export default Footer;