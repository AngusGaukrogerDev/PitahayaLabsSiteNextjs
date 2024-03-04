import React from 'react';

interface TestimonialTileProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialTile: React.FC<TestimonialTileProps> = ({ quote, author, company }) => {
  return (
    <div className=" w-10/12 h-auto flex flex-col justify-center items-center rounded-md px-2 py-5 gap-5 text-center">
        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_316_80)">
            <mask id="mask0_316_80" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="65">
            <path d="M0 0.5H64V64.5H0V0.5Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_316_80)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.644 25.82C52.0294 26.4114 54.1482 27.7843 55.6626 29.7199C57.177 31.6555 57.9999 34.0424 58 36.5V37.5C58 40.4174 56.8411 43.2153 54.7782 45.2782C52.7153 47.3411 49.9174 48.5 47 48.5H46C43.1464 48.5026 40.4038 47.3949 38.3523 45.4114C36.3008 43.4279 35.1015 40.724 35.008 37.872V37.86H35V36.5C35 35.976 35.04 35.46 35.108 34.956C35.188 33.912 35.308 32.884 35.468 31.876C35.891 29.2355 36.6421 26.6583 37.704 24.204C39.6109 19.8087 42.5831 15.958 46.352 13L46.744 12.696C46.9094 12.5694 47.1117 12.5006 47.32 12.5C48.064 12.5 48.544 13.308 48.2 13.968C47.8991 14.5415 47.6058 15.1189 47.32 15.7C46.7099 16.9511 46.1363 18.2196 45.6 19.504C44.7355 21.563 43.9916 23.6706 43.372 25.816L43.588 25.764C44.3799 25.5876 45.1887 25.4991 46 25.5H47C47.912 25.5 48.8 25.612 49.644 25.82ZM51.84 20.2C55.3523 21.2445 58.4334 23.3954 60.6245 26.3324C62.8155 29.2695 63.9995 32.8357 64 36.5V37.5C64 42.0087 62.2089 46.3327 59.0208 49.5208C55.8327 52.7089 51.5087 54.5 47 54.5H46C43.2451 54.5022 40.531 53.834 38.0919 52.5532C35.6529 51.2723 33.5621 49.4172 32 47.148C30.4379 49.4172 28.3471 51.2723 25.9081 52.5532C23.469 53.834 20.7549 54.5022 18 54.5H17C12.5503 54.5009 8.2776 52.7571 5.09919 49.643C1.92078 46.529 0.090041 42.2928 0 37.844L0 36.5C0 35.768 0.048 35.04 0.14 34.328C0.968 23.848 5.572 14.464 14.092 7.932C15.3056 7.00287 16.7916 6.49958 18.32 6.5C23.684 6.5 26.904 12.2 24.512 16.756C24.068 17.6 23.472 18.788 22.84 20.196C25.992 21.132 28.764 22.956 30.86 25.384C33.0272 18.4381 37.3021 12.3388 43.092 7.932C44.3056 7.00287 45.7916 6.49958 47.32 6.5C52.684 6.5 55.904 12.2 53.512 16.756C53.068 17.6 52.472 18.788 51.84 20.196V20.2ZM20.64 25.82C19.7748 25.6069 18.887 25.4994 17.996 25.5H16.996C16.1105 25.4996 15.2282 25.6057 14.368 25.816C15.102 23.2697 16.0108 20.7771 17.088 18.356C17.7416 16.8696 18.446 15.4061 19.2 13.968C19.2794 13.8157 19.3183 13.6457 19.3132 13.4741C19.3081 13.3024 19.2591 13.135 19.1708 12.9877C19.0825 12.8405 18.958 12.7183 18.809 12.6329C18.6601 12.5475 18.4917 12.5018 18.32 12.5C18.1117 12.5006 17.9094 12.5694 17.744 12.696C16.4146 13.7187 15.1705 14.8477 14.024 16.072C11.6635 18.6102 9.78002 21.5533 8.464 24.76C7.52842 27.0475 6.85999 29.4353 6.472 31.876C6.30523 32.8968 6.18378 33.9245 6.108 34.956C6.03609 35.4675 6 35.9834 6 36.5V37.856H6.004V37.872C6.09751 40.7247 7.29742 43.4291 9.34974 45.4128C11.4021 47.3964 14.1457 48.5036 17 48.5H18.004C20.9214 48.5 23.7193 47.3411 25.7822 45.2782C27.8451 43.2153 29.004 40.4174 29.004 37.5V36.5C29.004 31.34 25.444 27.004 20.648 25.82H20.64Z" fill="#EDBB0C"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_316_80">
            <rect width="64" height="64" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
        </svg>
        <h3 className='italic text-pitahaya-grey-100'>{quote}</h3>
        <h3 className='text-pitahaya-black px-2 py-1 font-semibold'>{author} - {company}</h3>
{/* 
        <div className='flex flex-col justify-center items-center bg-pitahaya-yellow  rounded-md'>
            <h3 className='text-pitahaya-white px-2 py-1 font-semibold'></h3>
        </div> */}
    </div>
  );
}

export default TestimonialTile;