import TemperatureConverter from "../component/temperatureConverter";
export const metadata={
  metadataBase: new URL('https://tool-hubs.com'),
  title: "Temperature Converter",
  description: "Effortlessly convert temperatures between Celsius, Fahrenheit, and Kelvin with our Temperature Converter tool. Quick and accurate temperature conversion for your convenience. Completely free of charge at tool hubs.",
  openGraph:{
    title: "Temperature Converter",
    description: "Effortlessly convert temperatures between Celsius, Fahrenheit, and Kelvin with our Temperature Converter tool. Quick and accurate temperature conversion for your convenience. Completely free of charge at tool hubs.",
    url:"https://tool-hubs.com/temperature-converter"
  },
  keywords:[
    'Temperature conversion',
    'Celsius to Fahrenheit',
    'Kelvin conversion',
    'Free temperature tool',
    'Online temperature calculator',
    'Convert temperatures',
    'Weather data conversion',
    'Thermometer scale converter',
    'Temperature unit calculator',
    'Metric to imperial temperature',
    'Temperature scale conversion',
    'Climate data tool',
    'Simple temperature converter',
    'Efficient temperature conversion',
    'Accurate temperature conversion',
  ],
  alternates:{
    canonical:'/temperature-converter'
  }
}
const Home =()=>{
return(
  <TemperatureConverter />
)
}
export default Home;