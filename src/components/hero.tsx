import Link from "next/link";
import NavigationButton from "./navigationButton";

const Hero = () => {
    return(
        <>
            <section id="home" className="bg-pitahaya-white w-full hero-overflow flex flex-col justify-center items-center gap-3">
                <nav className={`w-full flex flex-row justify-between top-0  my-5 px-5 rounded-xl`}>
                    {/* Additional className to control visibility */}
                    <span className="text-pitahaya-black">Pitahaya Labs</span>
                    <NavigationButton />
                </nav>
                <div className="h-screen w-full px-5 gap-3 flex flex-col justify-center items-center text-center sm:text-center sm:items-center">
                    <h1 className="text-pitahaya-black">Web Development <br className="block sm:hidden"/>Services for<br className="block sm:hidden"/>EdTech Startups</h1>
                    <h3 className="text-pitahaya-grey ">The Dev Team you've been <br className="block sm:hidden"/>searching for to bring your <br className="block sm:hidden"/>Learning Platform to life.</h3>
                    <Link legacyBehavior href="/#contact" as="/#contact" >
                        <button className="bg-pitahaya-yellow text-pitahaya-white px-4 py-2 rounded-sm w-40 sm:w-56 h-12 lg:w-32 hover:cursor-pointer hover:bg-amaranth-700">
                            <h3>Get In Touch</h3>
                        </button>                  
                    </Link>
                </div>   
                <div id="about" className=" w-full flex flex-col items-center justify-center px-5 sm:items-center sm:px-0">
                    <img className="rounded-lg w-52 md:w-1/4"  src="https://store.brth.uk/pitahaya/Mug.jpg"/>
                </div>
            </section>
            
        </>
        
    );
}
export default Hero;