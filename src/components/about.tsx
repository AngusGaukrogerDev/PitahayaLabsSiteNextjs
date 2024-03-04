import Link from "next/link";

const About = () => {
    return(
        <section id="about" className="w-full h-auto text-center flex flex-col xl:flex-row justify-center items-center px-5 md:px-24 py-20 gap-5 bg-pitahaya-white">
            <div className=" w-full flex flex-col items-center justify-center px-5 sm:items-center sm:px-0">
                <svg className="absolute z-[5] mt-36 ml-48 rotate-triangle floating" width="95" height="91" viewBox="0 0 95 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.286 0.441233L94.6736 73.7507L0.491901 90.2592L33.286 0.441233Z" fill="#EDBB0C"/>
                </svg>
                <svg className="absolute mb-24 mr-48 z-[5] rotate-shape floating2" width="109" height="94" viewBox="0 0 109 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54.5 0L75.1745 50.5636L108.627 93.75L54.5 86.3729L0.373413 93.75L33.8255 50.5636L54.5 0Z" fill="#EDBB0C"/>
                </svg>
                <img className="rounded-md w-52 md:w-1/4"  src="https://store.brth.uk/pitahaya/Mug.jpg"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-pitahaya-black mt-10">Building a Learning Platform shouldn’t be hard. Let’s craft an app that your students will love!</h2>
                <div className=" rounded-lg px-3 sm:px-5 py-4 text-center flex flex-col justify-center items-center gap-5">
                    <h3 className="text-pitahaya-grey w-68">
                        The process of building an EdTech platform can be overwhelming. The level of technical knowledge required to build a fully functional web application is high and it can take years to learn how to build a quality product.
                    </h3>
                    <h3 className="text-pitahaya-grey w-68">       
                        It’s time set yourself apart with a fast, modern and efficient EdTech application, that students will genuinely enjoy using.
                    </h3>
                    <Link legacyBehavior href="/#service" as="/#service">
                        <button className="flex flex-row justify-center items-center gap-2 hover:cursor-pointer">
                            <h3 className="text-pitahaya-yellow">
                                Find out how
                            </h3>
                            <svg width="11" height="15" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.347465 9.79072C0.213455 9.65654 0.138184 9.47466 0.138184 9.28502C0.138184 9.09539 0.213455 8.91351 0.347465 8.77933L4.1354 4.99139L0.347465 1.20345C0.22106 1.0678 0.152245 0.888372 0.155516 0.702982C0.158787 0.517591 0.233889 0.340708 0.365 0.209596C0.496112 0.0784848 0.672995 0.00338249 0.858386 0.000111488C1.04378 -0.00315951 1.2232 0.0656562 1.35885 0.192061L5.65249 4.48569C5.7865 4.61987 5.86177 4.80175 5.86177 4.99139C5.86177 5.18103 5.7865 5.36291 5.65249 5.49708L1.35885 9.79072C1.22468 9.92473 1.0428 10 0.85316 10C0.663523 10 0.481641 9.92473 0.347465 9.79072Z" fill="#edbb0c"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            
        </section>
    );
}
export default About;