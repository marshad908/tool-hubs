// components/FeaturesSection.js
import React from 'react';
import Link from 'next/link';


const FeaturesSection = () => {
  const features = [
    {
      title: 'Mass Calculator',
      description: "Unleash the power of precision with tool hubs Mass Converter tool! Seamlessly switch between kilograms, grams, pounds, and more. Whether you're a fitness fanatic, culinary maestro, or scientific guru, tool hubs this tool ensures your mass conversions are as smooth as silk. Embrace accuracy, simplify your tasks, and conquer the world of weights effortlessly at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M448 64h-25.98C438.44 92.28 448 125.01 448 160c0 105.87-86.13 192-192 192S64 265.87 64 160c0-34.99 9.56-67.72 25.98-96H64C28.71 64 0 92.71 0 128v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V128c0-35.29-28.71-64-64-64zM256 320c88.37 0 160-71.63 160-160S344.37 0 256 0 96 71.63 96 160s71.63 160 160 160zm-.3-151.94l33.58-78.36c3.5-8.17 12.94-11.92 21.03-8.41 8.12 3.48 11.88 12.89 8.41 21l-33.67 78.55C291.73 188 296 197.45 296 208c0 22.09-17.91 40-40 40s-40-17.91-40-40c0-21.98 17.76-39.77 39.7-39.94z"></path></svg>,
      buttonLink: '/mass-calculator',
    },
    {
      title: 'Length Calculator',
      description: "Dive into the realm of responsive design with tool hubs Length Converter tool! Transition effortlessly between meters, kilometers, feet, and miles. Tailor-made for web developers and design virtuosos, tool hubs this tool is your compass in the vast landscape of lengths. Experience a symphony of accuracy and efficiency – your shortcut to precision in every pixel at tool hubs!",
      image: <svg   x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" height="10rem" width="10rem" >
      <g><g><path fill="#000000" d="M176.1,10l-8.7,8.7l35,35l-8.7,8.7l-35-35l-8.7,8.7l17.5,17.5l-8.7,8.7L141.1,45l-8.7,8.7l17.5,17.5l-8.7,8.7l-17.5-17.5l-8.7,8.7l17.5,17.5l-8.7,8.7l-17.5-17.5l-8.7,8.7l35,35l-8.7,8.7l-35-35l-8.7,8.7l17.5,17.5l-8.7,8.7l-17.5-17.5l-8.7,8.7l17.5,17.5l-8.7,8.7l-17.5-17.5l-8.7,8.7l17.5,17.5l-8.7,8.7l-17.5-17.5l-8.7,8.7l35,35l-8.7,8.7l-35-35l-8.7,8.7L79.9,246L246,79.9L176.1,10z"/></g></g>
      </svg>,
      buttonLink: '/length-calculator',
    },
    {
      title: 'Words Counter',
      description: "Elevate your writing game with tool hubs Words Counter tool! Crafted for wordsmiths, scholars, and professionals alike, tool hubs this tool is your trusty sidekick in the world of wordplay. Effortlessly tally words in your documents or articles, enhancing your productivity and keeping your creativity flowing. Unleash the power of your prose with accurate word counts at your fingertips at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"></path></svg>,
      buttonLink: '/word-counter-online',
    },
    {
      title: 'Secure Password Generator',
      description: "Safeguard your digital kingdom with tool hubs Password Generator tool! Tailor-made for security enthusiasts and privacy guardians, tool hubs this tool crafts strong and secure passwords effortlessly. Customize length and complexity, ensuring your fortress remains impenetrable. Elevate your online security – one bulletproof password at a time!",
      image: <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor"></path><path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor"></path><path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor"></path><path d="M20 11H16V13H20V11Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor"></path></svg>,
      buttonLink: '/secure-password-generator',
    },
    {
      title: 'Color Palette',
      description: "Ignite your creative spark with tool hubs Color Palette tool! A playground for designers and artists, explore a kaleidoscope of colors and craft beautiful palettes for your projects. Effortlessly export your color creations, bringing harmony and vibrancy to your designs. Transform your visions into a spectrum of stunning visuals at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"></path><circle cx="144" cy="208" r="32"></circle><circle cx="152" cy="311" r="32"></circle><circle cx="224" cy="144" r="32"></circle><circle cx="256" cy="367" r="48"></circle><circle cx="328" cy="144" r="32"></circle></svg>,
      buttonLink: '/color-palette',
    },
    {
      title: 'Temperature Converter',
      description: " Navigate the temperature spectrum effortlessly with tool hubs Temperature Converter tool! Tailored for scientists, engineers, and temperature aficionados, tool hubs this tool dances between Celsius, Fahrenheit, and Kelvin with grace and accuracy. Whether you're dealing with chemistry experiments or planning a vacation, ensure your temperature conversions are spot-on. Embrace the ease of transforming temperature with just a click at tool hubs!",
      image:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M224 96c0-53.019-42.981-96-96-96S32 42.981 32 96v203.347C12.225 321.756.166 351.136.002 383.333c-.359 70.303 56.787 128.176 127.089 128.664.299.002.61.003.909.003 70.698 0 128-57.304 128-128 0-32.459-12.088-62.09-32-84.653V96zm-96 368l-.576-.002c-43.86-.304-79.647-36.544-79.423-80.42.173-33.98 19.266-51.652 31.999-66.08V96c0-26.467 21.533-48 48-48s48 21.533 48 48v221.498c12.63 14.312 32 32.164 32 66.502 0 44.112-35.888 80-80 80zm64-80c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V96c0-17.673 14.327-32 32-32s32 14.327 32 32v232.583c19.124 11.068 32 31.732 32 55.417z"></path></svg>,
      buttonLink: '/temperature-converter',
    },
    {
      title: 'JSON to CSV Converter',
      description: "Bridge the gap between data formats seamlessly with tool hubs JSON to CSV Converter tool! A must-have for data wranglers and analysts, effortlessly transform JSON data into CSV format. Simplify data interchange between systems and unlock new possibilities in data management. Embrace efficiency in handling diverse data formats effortlessly at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M7,13 C7,13 6.00000004,13 5,13 C3.99999996,13 3,13.5 3,14.5 L3,16 C3,16 3.00000001,16.5 3,17.5 C2.99999999,18.5 4,19 5,19 L7,19 M13.25,13 C13.25,13 12.25,13 10.75,13 C9.25,13 8.75,13.5 8.75,14.5 C8.75,15.5 9.25,16 10.75,16 C12.25,16 12.75,16.5 12.75,17.5 C12.75,18.5 12.25,19 10.75,19 C9.25,19 8.25,19 8.25,19 M20.5,12 C20.5,12 20.5,12 20.5,12.5 C20.5,13 18,19 18,19 L17.5,19 C17.5,19 15,13 15,12.5 L15,12"></path></svg>,
      buttonLink: '/json-to-csv',
    },
    {
      title: 'CSV to JSON Converter',
      description: "Transform your data landscape with tool hubs CSV to JSON Converter! Tailored for data alchemists and system integrators, tool hubs this tool simplifies the conversion of CSV files to versatile JSON format. Enhance compatibility and streamline your data workflows with ease. Unleash the power of data transformation at your fingertips!",
      image: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg>,
      buttonLink: '/csv-to-json',
    },
    {
      title: 'Image Format Converter',
      description: "Shape your visual narrative with tool hubs Image Format Converter tool! Perfect for photographers, designers, and image enthusiasts, effortlessly switch between image formats like JPEG, PNG, and GIF. Maintain image quality during the conversion process, ensuring your visuals speak volumes. Elevate your imagery, one format at a time at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"></path><path d="M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"></path></svg>,
      buttonLink: '/image-format-converter',
    },
    {
      title: 'Minify Unminify JSON Converter',
      description: "Optimize or beautify your JSON data effortlessly with tool hubs Minify Unminify JSON Converter tool! A versatile tool for developers and data architects, effortlessly condense or expand JSON files at tool hubs. Enhance efficiency with optimized data or improve readability for seamless development. Your gateway to streamlined JSON manipulation at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53 2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869 0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787 1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566 0 .29-.006.58-.018.869-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753.223.23.482.407.775.53.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32 1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573 0-.228.003-.453.011-.672.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64 2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602.033-.21.051-.423.055-.64.008-.22.008-.442 0-.666-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354 1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185.293-.123.552-.3.775-.53.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863-.012-.29-.018-.58-.018-.869 0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787 1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753 2.331 2.331 0 0 0-.775-.53 2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115.174.082.326.188.457.32.127.134.23.29.309.467.074.18.11.37.11.573 0 .228-.003.452-.011.672-.008.228-.008.45 0 .665.004.222.022.435.055.64.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955 2.285 2.285 0 0 0-.738.955 2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354 1.33 1.33 0 0 1-.563.121H10z"></path></svg>,
      buttonLink: '/json-conversion',
    },
    {
      title: 'CSS Unit Converter',
      description: "Craft responsive and consistent layouts with tool hubs CSS Unit Converter tool! Tailored for web developers and designers, effortlessly convert CSS units such as pixels (px), em, rem, and percentages. Your toolkit for precision in web design – ensure your layouts shine across devices and resolutions at tool hubs!",
      image: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="10rem" width="10rem" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.446 17.412c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174-1.397 0-2.117-.869-2.117-2.021C7.191 14.768 8.175 14 9.398 14c.474 0 .833.096.995.18l-.186.726a1.98 1.98 0 0 0-.768-.149c-.726 0-1.29.438-1.29 1.337.001.808.482 1.318 1.297 1.318zm2.491.755c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252.42 0 .642-.174.642-.438 0-.252-.192-.396-.678-.57-.672-.234-1.109-.605-1.109-1.193 0-.689.575-1.217 1.529-1.217.455 0 .791.096 1.031.203l-.204.738a1.919 1.919 0 0 0-.846-.192c-.396 0-.587.181-.587.39 0 .258.228.372.749.57.714.264 1.05.636 1.05 1.205-.001.678-.523 1.253-1.632 1.253zm3.24 0c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252.42 0 .642-.174.642-.438 0-.252-.192-.396-.678-.57-.672-.234-1.109-.605-1.109-1.193 0-.689.575-1.217 1.529-1.217.455 0 .791.096 1.031.203l-.204.738a1.919 1.919 0 0 0-.846-.192c-.396 0-.587.181-.587.39 0 .258.228.372.749.57.714.264 1.05.636 1.05 1.205 0 .678-.523 1.253-1.632 1.253zM14 9h-1V4l5 5h-4z"></path></svg>,
      buttonLink: '/css-unit-converter',
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="our-tools">
      <div className="container mx-auto w-3/4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Tools</h2>
        <div className="grid grid-cols-1  gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white p-6 rounded-md shadow-md hover:shadow-2xl hover:ease-in-out hover:duration-150 cursor-pointer flex flex-col  ${index%2 == 0 ? 'md:flex-row':'md:flex-row-reverse'} justify-between items-center`} >
              <div className="mb-4 rounded-md flex flex-row justify-center w-full md:w-1/4 items-center" >{feature.image}</div>
              <div className='w-full md:w-2/3'>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 tex-lg">{feature.description}</p>
              <Link href={feature.buttonLink} className="mt-4 inline-block text-sm px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Try Now
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
