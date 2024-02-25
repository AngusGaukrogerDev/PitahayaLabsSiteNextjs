import NavigationButton from "./navigationButton";

const Hero = () => {
    return(
        <>
            <section id="home" className="w-full hero-overflow flex flex-col justify-center items-center bg-snow-800 gap-3">
                <nav className={`w-full flex flex-row justify-between top-0 bg-snow-800 my-5 px-5 rounded-xl`}>
                    {/* Additional className to control visibility */}
                    <h2>Pitahaya Labs</h2>
                    <NavigationButton />
                </nav>
                <div className="h-screen w-full px-3 gap-5 flex flex-col justify-center items-center text-center">
                    <h1 className="text-gunmetal">Web Development Services for EdTech Startups</h1>
                    <h3 className="text-gunmetal ">The Dev Team you've been searching for to bring your Learning Platform to life.</h3>
                    <button className="button-primary text-snow px-4 py-2 rounded-xl w-40 h-12 lg:w-32 hover:cursor-pointer hover:bg-amaranth-700">
                        <h3>Get In Touch</h3>
                    </button>
                </div>   
                <div className="h-1/4 w-full flex flex-col items-center">
                    <img className="rounded-lg w-52 md:w-1/4"  src="https://store.brth.uk/pitahaya/Mug.jpg"/>
                </div>
            </section>
            
        </>
        
    );
}
export default Hero;