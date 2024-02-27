import Link from "next/link";
import Navbar from "./navbar";

const NavigationScreen = ({ onSelectItem }: { onSelectItem: () => void }) => {
  return (
    <div className="fixed left-0 top-0 bg-pitahaya-white w-full h-screen flex flex-col justify-center items-center gap-10 sm:gap-2 sm:py-3 px-5 z-[98] lg:gap-0 lg:h- xl:px-48 xl:py-32">
      <Navbar />
      <Link legacyBehavior href="/" as="/">
        <a onClick={onSelectItem} className="">
          <h2>Home</h2>
        </a>
      </Link>
      <Link legacyBehavior href="/#about" as="/#about">
        <a onClick={onSelectItem} className="">
          <h2>About</h2>
        </a>
      </Link>
      <Link legacyBehavior href="/#pitahayalabs" as="/#pitahayalabs">
        <a onClick={onSelectItem} className="">
          <h2>Service</h2>
        </a>
      </Link>
      <Link legacyBehavior href="/#contact" as="/#contact">
        <a onClick={onSelectItem} className="bg-pitahaya-yellow text-pitahaya-white flex flex-col justify-center items-center text-center px-4 py-2 rounded-xl w-40 sm:w-56 h-12 lg:w-32 hover:cursor-pointer hover:bg-pitahaya-yellow-600">
          <h2>Contact</h2>
        </a>
      </Link>
    </div>
  );
};

export default NavigationScreen;
