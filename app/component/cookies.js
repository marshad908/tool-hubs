// components/CookiesConsentPopup.js
"use client"
// components/CookiesConsentPopup.js
import { useState, useEffect } from 'react';

const CookiesConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Check if the user has previously accepted or rejected cookies
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies');
    const hasRejectedCookies = localStorage.getItem('rejectedCookies');

    // Show the popup only if the user hasn't made a choice yet
    if (hasAcceptedCookies || hasRejectedCookies) {
      setShowPopup(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set a flag in localStorage to indicate that the user has accepted cookies
    localStorage.setItem('acceptedCookies', 'true');
    setShowPopup(false);
  };

  const handleRejectCookies = () => {
    // Set a flag in localStorage to indicate that the user has rejected cookies
    localStorage.setItem('rejectedCookies', 'true');
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    // Close the popup when the close icon is clicked
    setShowPopup(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 w-96 p-4 rounded-md bg-white shadow-md ${showPopup ? 'block' : 'hidden'}`}>
      <div className="flex items-start justify-between   ">
        <p className="text-base  ">
          This website uses cookies to ensure you get the best experience on our website.
        </p>
        <button onClick={handleClosePopup} >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={handleAcceptCookies} className="bg-blue-700 text-white text-sm px-4 py-2 rounded">
          Accept Cookies
        </button>
        <button onClick={handleRejectCookies} className="ml-2 bg-gray-300 text-sm text-gray-700 px-4 py-2 rounded">
          Reject Cookies
        </button>
      </div>
    </div>
  );
};

export default CookiesConsentPopup;

