import MassConverter from "../component/massConverter";
export const metadata={
  
  title: "Mass Calculator",
  description: "Experience quick and precise mass conversions with our Mass Calculator tool at Tool Hubs. Convert between various units effortlessly, whether it's kilograms to pounds or ounces to grams using our Mass Calculator tool. Enjoy this complimentary service!",
  openGraph:{
    title: "Mass Calculator",
    description: "Experience quick and precise mass conversions with our Mass Calculator tool at Tool Hubs. Convert between various units effortlessly, whether it's kilograms to pounds or ounces to grams using our Mass Calculator tool. Enjoy this complimentary service!",
    url:"https://tool-hubs.com/mass-calculator"
  },
  keywords:[
    'Mass conversion',
    'Unit converter',
    'Free mass tool',
    'Online mass conversion',
    'Convert mass units',
    'Weight conversion',
    'Grams to ounces',
    'Kilograms to pounds',
    'Milligrams to kilograms',
    'Tonne to pound converter',
    'Mass measurement tool',
    'Imperial to metric weight',
    'Mass unit calculator',
    'Convert pounds to grams',
    'Online weight converter',
  ],
  alternates:{
    canonical:'/mass-calculator'
  }
}
const Home =()=>{
  return (
<MassConverter />
  )
}
export default Home;