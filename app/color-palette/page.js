import ColorPaletteGenerator from "../component/colorPaletteGenerator"

export const metadata={
  title: "Color Palette",
  description: "Explore vibrant color palette effortlessly with our free Color Palette tool. Perfect for designers and developers seeking inspiration. Unlock endless possibilities with tool hubs",
  openGraph:{
    title: "Color Palette",
    description: "Explore vibrant color palette effortlessly with our free Color Palette tool. Perfect for designers and developers seeking inspiration. Unlock endless possibilities with tool hubs",
    url:"https://tool-hubs.com/color-palette",
  },
  keywords: [
    'Color combinations',
    'Color inspiration',
    'Design palette',
    'Free color tool',
    'Developers color palette',
    'Online color picker',
    'Color scheme generator',
    'Digital color palette',
    'Website color scheme',
    'Palette creator tool',
    'Color harmony',
    'UI color selection',
    'Hex code generator',
    'RGB color picker',
    'Web design colors',
  ],
  alternates:{
    canonical:'/color-palette'
  }
}
 const Home =()=>{
  return(
    <ColorPaletteGenerator />
  )
}

export default Home;