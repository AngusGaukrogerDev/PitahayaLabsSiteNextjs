import Link from "next/link";
import NavigationButton from "./navigationButton";
import BookACallStickyButton from "@/components/bookACallButton";
import NavbarHero from "./navbarHero";

const Hero = () => {
    return(
        <>
            <section id="home" className="bg-pitahaya-light-grey w-full h-screen flex flex-col justify-center items-center pt-10">
                <NavbarHero />
                <div className="absolute bottom-5 right-5 xl:right-24 xl:bottom-10">
                    {/* Large */}
                    <img className="hidden xl:block" src="https://store.brth.uk/pitahaya/patternrightcornertablet.png" />
                    
                    {/* Tablet */}
                    <img className="hidden md:block xl:hidden" src="https://store.brth.uk/pitahaya/patternrightcornertablet.png" />

                    {/* Mobile */}
                    <img className="block sm:hidden" src="https://store.brth.uk/pitahaya/patternrightcornertablet.png" />
                </div>
                <div className="h-screen w-full xl:w-2/3 px-5 md:px-28 lg:px-32 xl:px-44 gap-4 xl:gap-7 flex flex-col justify-center items-center text-center sm:text-center sm:items-center">
                    <h1 className="text-pitahaya-black hidden">Software Development Services for EdTech Start-ups</h1>
                    <h2 className="text-pitahaya-black text-4xl xl:text-6xl">Software Development Services for EdTech Start-ups</h2>
                    <h3 className="text-pitahaya-black w-10/12 ">We specialise in building bespoke learning platforms for EdTech Startups, harnessing modern technologies and AI.</h3>
                    <Link legacyBehavior href="/#contact" as="/#contact" >
                        <button className=" bg-pitahaya-black text-pitahaya-white px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                            <h3>Book a call</h3>
                        </button>                  
                    </Link>
                </div>   

            </section>
            
        </>
        
    );
}
export default Hero;