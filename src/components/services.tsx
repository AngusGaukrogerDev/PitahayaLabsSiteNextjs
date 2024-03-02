import ServicesTile from "./servicesTile";

const Services = () => {
    return(
        <section id="ourservice" className="w-full h-auto flex flex-col justify-center items-center gap-5 bg-pitahaya-white px-2 py-5">
            <h2 className="text-pitahaya-black">Our 3 Step Service</h2>
            <ServicesTile 
                number={1} 
                title="Book a meeting" 
                description="Get in touch with us today
                    to discuss the current stage
                    of your product, and how we
                    help with development." 
                />
            <ServicesTile 
                number={2} 
                title="Plan of action "      
                description="Based off your requirements,
                    we’ll craft a full plan of action
                    based on your long term
                    goals." 
            />
            <ServicesTile 
                number={3}
                title="Leave the rest to us" 
                description="We’ll get to work building your
                    platform, keeping you in the 
                    loop at every stage of the
                    process." 
            />
        </section>
    );
}
export default Services;