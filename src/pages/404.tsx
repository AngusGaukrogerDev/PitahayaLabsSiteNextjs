import Navbar from "@/components/navbar";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="h-screen w-full flex flex-col justify-center items-center gap-3 bg-pitahaya-white">
                <h2>404 - Page Not Found</h2>
                <Link legacyBehavior href="/" as="/" >
                    <button className=" bg-pitahaya-black text-pitahaya-white px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                        <h3>Go Home</h3>
                    </button>                  
                </Link>
            </div>
        </>
            
    );
  }