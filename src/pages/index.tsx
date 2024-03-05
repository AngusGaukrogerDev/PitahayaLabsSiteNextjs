import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonial from "@/components/testimonials";
import { Inter } from "next/font/google";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // useEffect(()=>{
	//   (async function () {
	// 	const cal = await getCalApi("https://cnnct.uk/embed/embed.js");
	// 	cal("floatingButton", {"calLink":"pitahayalabs/initial-learning-platform-discussion","calOrigin":"https://cnnct.uk","buttonText":"Book a call!","hideButtonIcon":true});
	// 	cal("ui", {"styles":{"branding":{"brandColor":"#2C2C2D"}},"hideEventTypeDetails":false,"layout":"month_view"});
	//   })();
	// }, [])
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>  
  );
}
