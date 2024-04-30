// components/ContactUsSection.js
"use client"
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have questions or need assistance? Feel free to reach out to us. We are here to help!
        </p>
        <Link href="/contactUs" className="bg-blue-500 text-white text-sm px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          
            Go to Contact Us
          
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
