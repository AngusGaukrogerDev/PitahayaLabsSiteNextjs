import TestimonialTile from "./testimonialTile";

const Testimonial = () => {
    return(
        <section id="testimonials" className="w-full h-auto flex flex-col justify-center items-center gap-10 bg-pitahaya-white px-2 py-20">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2>Testimonials</h2>
                <h3 className="text-pitahaya-grey text-center">What our clients say about us</h3>
            </div>
           <TestimonialTile 
                quote="“Pitahaya Labs have been instrumental in handling my web projects for English-speaking clients in the German-speaking region.
                    They possess extensive expertise and manage to articulate complexity in simple terms.”" 
                author="Sylvia Szulc"
                company="BRAND JOURNEY" />
           <TestimonialTile 
                quote="“The developers at Pitahaya Labs are extremely versatile, proficient in a range of technologies that are crucial in today's tech landscape.”" 
                author="Simona FIlipova"
                company="YOKR" />
           <TestimonialTile 
                quote="“Working with Angus feels like the technical co-founder you've always needed for your project. Ambitious and friendly, he offers a great sense of direction while delivering exceptional quality results. He comes highly recommended to anybody starting in the EdTech space.”" 
                author="Mike Armstrong"
                company="Bytefinity" />
        </section>
    );
}
export default Testimonial;