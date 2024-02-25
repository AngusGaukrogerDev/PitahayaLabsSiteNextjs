import Link from "next/link";

const NavigationScreen = ({ onSelectItem }: { onSelectItem: () => void }) => {
  return (
    <div className="fixed left-0 top-0 bg-snow-800 w-full h-screen flex flex-col justify-center items-start gap-10 sm:gap-2 sm:py-3 px-5 z-[98] lg:gap-0 lg:h- xl:px-48 xl:py-32">
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
        <a onClick={onSelectItem} className="">
          <h2>Contact</h2>
        </a>
      </Link>
    </div>
  );
};

export default NavigationScreen;
