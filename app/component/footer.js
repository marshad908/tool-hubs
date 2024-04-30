// components/Footer.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const websiteUrl = 'https://tool-hubs.com/'; // Replace with your actual website URL

  const [copyStatus, setCopyStatus] = useState('Share');

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(websiteUrl);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Share'), 3000);
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };
  // Function to open WhatsApp with a pre-filled message
  const openWhatsApp = () => {
    const whatsappMessage = encodeURIComponent('Check out this awesome website: ' + websiteUrl);
    window.open('https://wa.me/+923204612911?text=' + whatsappMessage, '_blank');
  };

  return (
    <footer className="bg-gray-200 text-gray-700 py-4">
      <div className="container mx-auto w-3/4 flex flex-col md:flex-row items-start md:items-center justify-between">
        <p className="text-sm font-extrabold">
          Copyrights &copy; {currentYear} TOOL Hub's.
        </p>
        <div className="flex flex-row gap-4 flex-wrap md:space-x-4 items-baseline mt-2 md:mt-0 ">
          {/* LinkedIn icon with external link */}
         

          {/* Share link */}
          <button onClick={handleCopyClick} className="text-sm underline">
            {copyStatus}
          </button>

          {/* Other links */}
          <Link href="/privacyPolicy" className="text-sm underline">
            Privacy Policy
          </Link>
          <Link href="/termsOfServices" className="text-sm underline">
            Terms of Service
          </Link>
          <Link href="/cookies" className="text-sm underline">
            Cookies
          </Link>
          <a href="https://www.linkedin.com/in/hafiz-arshad-372a8a170" target="_blank" rel="noopener noreferrer" className="text-sm">
            <FaLinkedin className="cursor-pointer" />
          </a>

          {/* WhatsApp icon with functional link */}
          <button onClick={openWhatsApp} className="text-sm">
            <FaWhatsapp className="cursor-pointer" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
