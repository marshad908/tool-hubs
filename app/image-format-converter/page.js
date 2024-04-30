import ImageConverter from "../component/imageConverter";
export const metadata={
  title: "Image Format Converter",
  description: "Effortlessly switch between image formats using our Image Format Converter tool. Seamlessly convert among popular image formats with speed and precision. Avail this complimentary service from Tool Hubs, the ultimate destination for hassle-free image format conversion.",
  openGraph:{
    title: "Image Format Converter",
  description: "Effortlessly switch between image formats using our Image Format Converter tool. Seamlessly convert among popular image formats with speed and precision. Avail this complimentary service from Tool Hubs, the ultimate destination for hassle-free image format conversion.",
  url:"https://tool-hubs.com/image-format-converter"
  },
  keywords:[
    'Image conversion',
    'Format conversion',
    'Online image converter',
    'Free image tool',
    'Image file conversion',
    'Convert image formats',
    'Graphic file converter',
    'Image format changer',
    'Photo file conversion',
    'Online image transformation',
    'Free graphic tools',
    'Digital image conversion',
    'Image format switcher',
    'Convert JPG to PNG',
    'Lossless image conversion',
  ],
  alternates:{
    canonical:'/image-format-converter'
  }
}
const Home =()=>{
  return(
<ImageConverter />
  )
}

export default Home;