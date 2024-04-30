import CssUnitConverter from "../component/cssUnitConverter";

export const metadata={
  title: "CSS Unit Converter",
    description: "Effortlessly convert CSS units with our free CSS Unit Converter tool. Essential for web developers and designers. Enjoy the convenience at no cost, exclusively at tool hubs",
    openGraph:{
      title: "CSS Unit Converter/Calculator - tool hubs",
      description: "Effortlessly convert CSS units with our free CSS Unit Converter tool. Essential for web developers and designers. Enjoy the convenience at no cost, exclusively at tool hubs",
      url:"https://tool-hubs.com/css-unit-converter"
    },
    keywords: [
      'CSS units',
      'Unit conversion',
      'Web developers tool',
      'CSS conversion',
      'Free unit converter',
      'Online CSS tools',
      'Responsive design units',
      'Web development utilities',
      'Convert pixels to em',
      'REM units calculator',
      'CSS rem px conversion',
      'Unit converter for developers',
      'Web design units',
      'Design layout tools',
      'Responsive design calculator',
    ],
    alternates:{
      canonical:'/css-unit-converter'
    }
}
const Home=()=>{
  return(
    <CssUnitConverter />
  )
}
export default Home;