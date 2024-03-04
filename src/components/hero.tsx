import Link from "next/link";
import NavigationButton from "./navigationButton";

const Hero = () => {
    return(
        <>
            <section id="home" className="hero-image w-full h-screen flex flex-col justify-center items-center pt-10">
                <div className="h-screen w-full px-10 gap-4 flex flex-col justify-center items-center text-center sm:text-center sm:items-center">
                    <h1 className="text-pitahaya-black">Web Development Services for EdTech Startups</h1>
                    <h3 className="text-pitahaya-grey w-10/12">The Dev Team you've been searching for to bring your Learning Platform to life.</h3>
                    <Link legacyBehavior href="/#contact" as="/#contact" >
                        <button className="bg-pitahaya-black text-pitahaya-white px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer hover:bg-pitahaya-yellow">
                            <h3>Get In Touch</h3>
                        </button>                  
                    </Link>
                </div>   
            </section>
            
        </>
        
    );
}
export default Hero;