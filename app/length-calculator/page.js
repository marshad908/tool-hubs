import LengthConverter from "../component/lengthConverter";
export const metadata={
  title: "Length Calculator",
  description: "Easily switch between different units of length with our Length Calculator. Enjoy fast, precise, and intuitive length calculations with just a few clicks. Access this free service at Tool Hubs, your go-to destination for all your length conversion needs!",
  openGraph:{
    title: "Length Calculator",
  description: "Easily switch between different units of length with our Length Calculator. Enjoy fast, precise, and intuitive length calculations with just a few clicks. Access this free service at Tool Hubs, your go-to destination for all your length conversion needs!",
  url:"https://tool-hubs.com/length-calculator"
  },
  keywords:[
    'Length conversion',
    'Unit converter',
    'Free length tool',
    'Online length conversion',
    'Convert lengths',
    'Metric to Imperial converter',
    'Length measurement tool',
    'Distance conversion',
    'Centimeters to inches',
    'Meters to feet',
    'Length unit calculator',
    'Convert millimeters to inches',
    'Length conversion utility',
    'Online measurement tool',
    'Imperial to metric converter',
  ],
  alternates:{
    canonical:'/length-calculator'
  }
}
const Home =()=>{
  return (
    <LengthConverter />
  )
}
export default Home;