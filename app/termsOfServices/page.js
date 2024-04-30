// pages/terms-of-service.js
"use client"

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
     

      <div className="container mx-auto lg:w-1/2">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="mb-8">
          <p className="text-lg leading-7">
            Welcome to tool hubs! These terms of service ("Terms") govern your use of our website, located at www.tool-hubs.com,
            and any associated services provided by tool hubs. By accessing our platform, you agree to comply with and be bound by
            these Terms. If you do not agree to these Terms, please do not use our platform.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg leading-7">
            By using our platform, you agree to be bound by these Terms, all applicable laws and regulations, and agree that you
            are responsible for compliance with any applicable local laws. If you do not agree with any of these Terms, you are
            prohibited from using or accessing this site.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="text-lg leading-7">
            Permission is granted to temporarily download one copy of the materials (information or software) on Your Tools
            for personal, non-commercial transitory viewing only.
          </p>
          <div className="text-lg leading-7">
            This is the grant of a license, not a transfer of title, and under this license, you may not:
            <ul className="list-disc pl-8">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose or for any public display.</li>
              <li>Attempt to decompile or reverse engineer any software contained on tool hubs.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </div>
          <p className="text-lg leading-7">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by tool hubs
            at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy
            any downloaded materials in your possession, whether in electronic or printed format.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p className="text-lg leading-7">
            The materials on tool hubs are provided on an 'as is' basis. tool hubs makes no warranties, expressed or implied,
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions
            of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation
            of rights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
