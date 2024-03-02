import ServicesTile from "./servicesTile";

const Services = () => {
    return(
        <section className="w-full h-auto flex flex-col justify-center items-center gap-3 bg-pitahaya-white px-2 py-5">
            <h2 className="text-pitahaya-black">Our 3 Step Service</h2>
            <ServicesTile number={1} title="Book a meeting" description="Get in touch with us today
                to discuss the current stage
                of your product, and how we
                help with development." />
            <ServicesTile number={2} title="Book a meeting" description="Get in touch with us today
                to discuss the current stage
                of your product, and how we
                help with development." />
            <ServicesTile number={3} title="Book a meeting" description="Get in touch with us today
                to discuss the current stage
                of your product, and how we
                help with development." />
        </section>
    );
}
export default Services;