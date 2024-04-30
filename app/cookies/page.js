import Link from "next/link";

// pages/cookies-settings.js
export const metadata={
  title: "Cookies - tool hubs",
  description: "Explore and manage your cookie preferences on Your Tools. Learn about the types of cookies we use, their purposes, and how you can control or opt-out of cookie tracking for a personalized browsing experience.",
  alternates:{
    canonical:'/cookies'
  },
  openGraph:{
    title: "Cookies - tool hubs",
  description: "Explore and manage your cookie preferences on Your Tools. Learn about the types of cookies we use, their purposes, and how you can control or opt-out of cookie tracking for a personalized browsing experience.",
   url:"https://tool-hubs.com/cookies",
  },
}

const CookiesSettings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
     

      <div className="container mx-auto lg:w-1/2">
        <h1 className="text-4xl font-bold mb-8">Cookies Settings</h1>

        <div className="mb-4">
          <p className="text-lg leading-7">
            At Tools Hub's, we use cookies to enhance your browsing experience and provide personalized content.
            Cookies are small pieces of data stored on your device. By clicking "Accept All Cookies," you agree
            to the storing of cookies on your device for the purposes outlined in our <Link href="/privacyPolicy" className="text-blue-700 underline">Privacy Policy</Link>.
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg leading-7">
            You can customize your cookie preferences below. Please note that blocking some types of cookies may
            impact your experience on our website.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Necessary Cookies</h2>
          <p className="text-lg leading-7">
            Necessary cookies are essential for the website to function properly. These cookies ensure basic
            functionalities and security features of the website.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Performance Cookies</h2>
          <p className="text-lg leading-7">
            Performance cookies are used to understand and analyze the key performance indexes of the website,
            helping us provide a better user experience for visitors.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Marketing Cookies</h2>
          <p className="text-lg leading-7">
            Marketing cookies are used to track visitors across websites. The intention is to display ads that
            are relevant and engaging for the individual user.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default CookiesSettings;
