// pages/about.js
export const metadata={
  title: "About Us - tool hubs",
  description: "Learn more about Your Tools, your go-to platform for a diverse range of conversion tools designed to simplify your work. Discover our commitment to user satisfaction and our journey to create a productive and innovative environment.",
  alternates:{
    canonical:'/aboutUs'
  },
  openGraph:{
    title: "About Us - tool hubs",
  description: "Learn more about Your Tools, your go-to platform for a diverse range of conversion tools designed to simplify your work. Discover our commitment to user satisfaction and our journey to create a productive and innovative environment.",
  url:"https://tool-hubs.com/aboutUs",
  },
}

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      

      <div className="container mx-auto lg:w-1/2">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="mb-8">
          <p className="text-lg leading-7">
            Welcome to our tool hubs, your trusted platform for a diverse range of conversion tools designed to simplify your work.
            At tool hubs, we are passionate about providing efficient solutions to enhance your productivity and make your tasks
            more manageable.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-7">
            Our journey started with a vision of creating a user-friendly space where professionals, students, and enthusiasts
            could access reliable conversion utilities. tool hubs is not just a collection of tools; it's a commitment to
            facilitating seamless conversions across various domains.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-7">
            What sets tool hubs apart is our dedication to user satisfaction. We believe that technology should empower, not
            complicate, and that reflects in the design and functionality of our tools. We continuously strive to improve and
            expand our offerings based on user feedback and emerging needs.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-7">
            The tool hubs team is a group of passionate individuals dedicated to creating tools that make a difference. We
            believe in the collaborative spirit of the online community, and Your Tools is our contribution to fostering a more
            productive and innovative environment.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-7">
            Our commitment to excellence is fueled by your feedback and suggestions. As we grow, we aim to provide an even
            broader spectrum of tools, ensuring that you always have the right utilities at your fingertips for any project.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-7">
            Thank you for choosing  tool hubs. We invite you to explore our collection of conversion tools, and we hope they
            streamline your work, bringing a touch of simplicity to your projects. Feel free to reach out with any suggestions
            or ideas — we're here to empower your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
