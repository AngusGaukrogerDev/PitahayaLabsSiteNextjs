'use client' 
import { useState } from "react";
import NavigationScreen from "./navigationScreen";

const NavigationButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <div className="fixed right-5 z-[103]">
      <button onClick={handleToggleMenu}>
        {openMenu ? (
                <svg  className="svg-icon h-7 w-7" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  />
                </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#292f36"
            strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        )}
      </button>
    </div>
    {openMenu ? <NavigationScreen onSelectItem={handleToggleMenu} /> : <></>}
    </>
  );
};

export default NavigationButton;
