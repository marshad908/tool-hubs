// pages/privacy-policy.js

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
    

      <header className=" py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      <main className="lg:w-1/2 mx-auto py-8 px-4 lg:px-20">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-700 text-lg">
                     Welcome to our tool hubs Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you use our website and its services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700 text-lg">
            We collect and store information you provide when using our tools, such as JSON to CSV Converter and CSV to JSON Converter. This may include input data, file uploads, and user interactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 text-lg">
            The information we collect is used to improve our tools and services. We do not sell or share your personal information with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
          <p className="text-gray-700 text-lg">
            We implement security measures to protect your information, but we cannot guarantee absolute security. Please exercise caution when sharing sensitive information online.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
          <p className="text-gray-700 text-lg">
            We may update our Privacy Policy periodically. Any changes will be posted on this page.
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default PrivacyPolicy;
