export const viewport = {
  themeColor: 'black',
}
import Homes from "./component/home"
export const metadata = {
  metadataBase: new URL('https://tool-hubs.com'),
  title: "Tool Hubs - Free Online Conversion and Utility Tools",
  description: "Explore tool hubs powerful conversion tools for enhanced productivity. From Mass Converter to CSS Unit Converter, simplify your tasks effortlessly. Get started now at tool hubs!",
  openGraph:{
    title: "Tool Hubs - Free Online Conversion and Utility Tools",
  description: "Explore tool hubs powerful conversion tools for enhanced productivity. From Mass Converter to CSS Unit Converter, simplify your tasks effortlessly. Get started now at tool hubs!",
  url:"https://tool-hubs.com"
  },
  keywords: [
    "Online mass converter",
    "Length conversion tool",
    "Words counter online",
    "Password generator utility",
    "Color palette creator",
    "Temperature conversion tool",
    "JSON to CSV converter",
    "CSV to JSON conversion",
    "Image format converter",
    "Minify Unminify JSON",
    "CSS unit converter",
    "Free conversion tools",
    "Productivity utilities",
    "tool hubs online tools",
    "Efficient data converters"
  ]
  ,
  alternates:{
    canonical:'/'
  },
}
const Home=()=>{
  return(
    <Homes />
  )
}

export default Home