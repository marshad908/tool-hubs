"use client"
import { useState } from 'react';
import Link from 'next/link';
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownMenu,setDropdownMenu] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const opendropdown  =()=>{
    setDropdownMenu(true)
  }
  const closedropdown  =()=>{
    setDropdownMenu(false)
  }

  const links = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/aboutUs' },
    { title: 'Contact', link: '/contactUs' },
    { title: 'Blogs', link: '/blogs' },
  ];

  const tools = [
    { title: 'Image Format Converter', link: '/image-format-converter' },
    { title: 'Temperature Converter', link: '/temperature-converter' },
    { title: 'Mass Converter', link: '/mass-calculator' },
    { title: 'Length Converter', link: '/length-calculator' },
    { title: 'CSS Unit Converter', link: '/css-unit-converter' },
    { title: 'Words Counter', link: '/word-counter-online' },
    { title: 'Color Generator', link: '/color-palette' },
    { title: 'JSON to CSV', link: '/json-to-csv' },
    { title: 'CSV to JSON', link: '/csv-to-json' },
    { title: 'Minify/Unminify JSON', link: '/json-conversion' },
    { title: 'Password Generator', link: '/secure-password-generator' },

    // Add links to other tools
  ];

  return (
    <nav className="bg-gray-800 dark:bg-gray-200 p-4">
      <div className="container mx-auto sm:w-3/4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
        TOOL Hub's
        </Link>

        {/* Mobile Menu Button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="lg:hidden text-white focus:outline-none w-6 h-6"
          onClick={toggleMobileMenu}
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>

        {/* Links */}
        <div className={`hidden lg:flex lg:space-x-4 lg:items-center`}>
          {links.map((link) => (
            <Link href={link.link} key={link.title} className="text-white text-lg" onClick={closeMobileMenu}>
              {link.title}
            </Link>
          ))}
          {/* Tools Dropdown */}
          <div className="relative  text-white text-lg flex flex-row items-center cursor-pointer" onMouseEnter={opendropdown} onMouseLeave={closedropdown}>
            <span >
              Tools
              </span>
              <MdArrowDropDown />
            
            {dropdownMenu && <ul className="absolute top-7 text-gray-800 bg-white text-sm rounded-md p-3 flex flex-col gap-4 w-40 z-20" onMouseEnter={opendropdown} onMouseLeave={closedropdown}>
              {tools.map((tool) => (
                <li key={tool.title}>
                  <Link href={tool.link} className="block hover:underline hover:text-blue-500 ease-in-out duration-150" onClick={closeMobileMenu}>
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>}
          </div>
        </div>
      </div>

      {/* Side Menu for Mobile View */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute right-0 top-0 p-4">
          <div className="bg-white p-4 rounded-md h-[300px] overflow-auto ">
            {links.map((link) => (
              <Link href={link.link} key={link.title} className="block text-gray-800 mb-2 text-base">
                {link.title}
              </Link>
            ))}
            {tools.map((tool) => (
              <Link href={tool.link} key={tool.title} className="block text-gray-800 mb-2 text-base">
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
