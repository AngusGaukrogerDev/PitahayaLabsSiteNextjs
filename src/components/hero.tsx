import Link from "next/link";
import NavigationButton from "./navigationButton";
import BookACallStickyButton from "@/components/bookACallButton";

const Hero = () => {
    return(
        <>
            <section id="home" className="hero-image w-full h-screen flex flex-col justify-center items-center pt-10">
                <div className="h-screen w-full xl:w-2/3 px-5 md:px-28 lg:px-32 xl:px-44 gap-4 xl:gap-7 flex flex-col justify-center items-center text-center sm:text-center sm:items-center">
                    <h1 className="text-pitahaya-black fade-in-right">Software Development Services for EdTech Startups</h1>
                    <h3 className="text-pitahaya-grey w-10/12 fade-in-left">We specialise in building bespoke learning platforms for EdTech Startups, harnessing modern technologies and AI.</h3>
                    <Link legacyBehavior href="/#contact" as="/#contact" >
                        <button className="fade-in-right bg-pitahaya-black text-pitahaya-white px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                            <h3>Get In Touch</h3>
                        </button>                  
                    </Link>
                </div>   

            </section>
            
        </>
        
    );
}
export default Hero;