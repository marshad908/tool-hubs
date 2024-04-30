// components/HeroArea.js
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const HeroArea = () => {
  const router = useRouter()
  return (
    <div className="bg-gray-800 text-white py-20 px-4 lg:py-40">
      <div className="container mx-auto  lg:w-1/2 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore tool hubs Powerful Tools</h1>
        <p className="text-lg mb-8">
        Unleash unparalleled productivity with tool hubs arsenal of cutting-edge tools. Whether you seek streamlined code editing or robust project management, tool hubs solutions have you seamlessly covered, propelling your efficiency to new heights.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-2xl hover:ease-in-out hover:duration-150 text-white text-sm font-bold py-3 px-6 rounded-full" onClick={()=> router.push('/#our-tools')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroArea;
