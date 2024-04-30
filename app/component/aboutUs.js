// components/AboutUsSection.js
import React from 'react';
import Link from 'next/link';

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto lg:w-1/2 text-center">
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg leading-7 mb-8 ">
          Welcome to our tool hubs, where innovation meets simplicity. We're dedicated to providing reliable and user-friendly conversion tools for professionals, students, and enthusiasts.
        </p>
        
        <p className="text-lg leading-7 mb-4">
          Thank you for choosing  tool hubs. Explore our collection of conversion tools and experience simplicity in your work.
        </p>
        <Link href="/aboutUs" className="mt-8 inline-block px-6 py-3 bg-blue-500 text-sm text-white rounded-full hover:bg-blue-600 transition duration-300">
          About Us
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
