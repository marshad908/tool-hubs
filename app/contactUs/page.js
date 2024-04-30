// pages/contact.js
export const metadata={
  title: "Contact Us - tool hubs",
  description: "Learn more about Your Tools, your go-to platform for a diverse range of conversion tools designed to simplify your work. Discover our commitment to user satisfaction and our journey to create a productive and innovative environment.",
  alternates:{
    canonical:'/contactUs'
  },
  openGraph:{
    title: "Contact Us - tool hubs",
  description: "Learn more about Your Tools, your go-to platform for a diverse range of conversion tools designed to simplify your work. Discover our commitment to user satisfaction and our journey to create a productive and innovative environment.",
  url:"https://tool-hubs.com/contactUs",
  },
}

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
   

      <div className="container mx-auto">
        <div className="bg-white p-8 rounded shadow-md max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <p className="text-gray-800 mb-4">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you! Fill out the form below,
            and we'll get back to you as soon as possible.
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-lg text-gray-800 font-medium block mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded text-sm"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-lg text-gray-800 font-medium block mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded text-sm"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-lg text-gray-800 font-medium block mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border rounded text-sm"
                rows="4"
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
