import React, { useState, useEffect } from 'react';

const BookACallStickyButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the y-coordinate value based on your requirement
      const targetYCoordinate = 300;

      // Check if the current scroll position is greater than or equal to the target y-coordinate
      const shouldShow = window.scrollY >= targetYCoordinate;

      // Update the state to show or hide the component
      setIsVisible(shouldShow);
    };

    // Add an event listener for the 'scroll' event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      {isVisible && (
        <a
          className="cursor-pointer sticky bottom-2 md:bottom-10 right-0 self-end justify-self-end bg-pitahaya-grey z-[9] w-16 md:w-24 h-16 md:h-20 mr-2 md:mr-16 font-bold text-pitahaya-white rounded-md flex flex-col justify-center items-center transition duration-300 transform hover:scale-110"
          target="_blank"
          href="https://cnnct.uk/pitahayalabs/initial-learning-platform-discussion"
        >
            {/* <h4 className='hidden md:block'>Book A Call Now!</h4> */}
            <svg className='block ' width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#FBFEFB"/>
            </svg>

        </a>
      )}
    </>
  );
};

export default BookACallStickyButton;
