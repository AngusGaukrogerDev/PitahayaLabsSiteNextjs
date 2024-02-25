import NavigationButton from "./navigationButton";

const Navbar = () => {
    return(
        <nav className="fixed w-full flex flex-row justify-between bg-snow-800 px-5 py-2 mt-5 rounded-xl">
            <h2>Pitahaya Labs</h2>
            <NavigationButton />
        </nav>
    );
}
export default Navbar;