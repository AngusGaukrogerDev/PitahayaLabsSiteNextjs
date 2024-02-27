import Link from "next/link";

const About = () => {
    return(
        <section className="w-full about-overflow text-center  flex flex-col justify-start items-center  px-5 gap-5 bg-pitahaya-white">
            <h2 className="text-pitahaya-black mt-10">Building a Learning Platform <br className="block sm:hidden"/>shouldn’t be hard. <br className="block sm:hidden"/>Let’s craft an app that<br className="block sm:hidden"/> your students will love!</h2>
            <div className=" h-auto rounded-lg mb-5 px-1 py-4 text-center flex flex-col justify-center items-center gap-3">
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
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.347465 9.79072C0.213455 9.65654 0.138184 9.47466 0.138184 9.28502C0.138184 9.09539 0.213455 8.91351 0.347465 8.77933L4.1354 4.99139L0.347465 1.20345C0.22106 1.0678 0.152245 0.888372 0.155516 0.702982C0.158787 0.517591 0.233889 0.340708 0.365 0.209596C0.496112 0.0784848 0.672995 0.00338249 0.858386 0.000111488C1.04378 -0.00315951 1.2232 0.0656562 1.35885 0.192061L5.65249 4.48569C5.7865 4.61987 5.86177 4.80175 5.86177 4.99139C5.86177 5.18103 5.7865 5.36291 5.65249 5.49708L1.35885 9.79072C1.22468 9.92473 1.0428 10 0.85316 10C0.663523 10 0.481641 9.92473 0.347465 9.79072Z" fill="#F3C316"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
}
export default About;