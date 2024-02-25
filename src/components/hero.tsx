const Hero = () => {
    return(
        <section className="w-full h-screen flex flex-col justify-center items-center bg-snow-800 ">
            <div className="h-1/2 w-full px-3 gap-5 flex flex-col justify-center items-center text-center">
                <h1 className="text-gunmetal">Web Development Services for EdTech Startups</h1>
                <h3 className="text-gunmetal ">The Dev Team you've been searching for to bring your Learning Platform to life.</h3>
                <button className="button-primary text-snow px-4 py-2 rounded-xl w-40 h-12 lg:w-32 hover:cursor-pointer hover:bg-amaranth-600">
                    <h3>Get In Touch</h3>
                </button>
            </div>   
        </section>
    );
}
export default Hero;