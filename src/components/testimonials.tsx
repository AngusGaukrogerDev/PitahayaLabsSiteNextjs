import TestimonialTile from "./testimonialTile";

const Testimonial = () => {
    return(
        <section id="testimonials" className="w-full h-auto flex flex-col justify-center items-center gap-3 bg-pitahaya-white px-2 py-5">
            <h2 className="text-pitahaya-black text-center">What our clients say about us</h2>
           <TestimonialTile 
                quote="“Pitahaya Labs have been instrumental in handling my web projects for English-speaking clients in the German-speaking region.
                    They possess extensive expertise and manage to articulate complexity in simple terms.”" 
                author="Sylvia Szulc - BRAND JOURNEY" />
           <TestimonialTile 
                quote="“The developers at Pitahaya Labs are extremely versatile, proficient in a range of technologies that are crucial in today's tech landscape.”" 
                author="Simona FIlipova -YOKR" />
           <TestimonialTile 
                quote="“Working with Angus feels like the technical co-founder you've always needed for your project. Ambitious and friendly, he offers a great sense of direction while delivering exceptional quality results. He comes highly recommended to anybody starting in the EdTech space.”" 
                author="Mike Armstrong - Bytefinity" />
        </section>
    );
}
export default Testimonial;