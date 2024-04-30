import PasswordGenerator from "../component/passwordGenerator";
export const metadata ={
  metadataBase: new URL('https://tool-hubs.com'),
  title: "Secure Password Generator",
  description: "Create strong and secure passwords effortlessly with our Secure Password Generator tool. Generate unique and secure passwords to enhance the security of your accounts. Enjoy this service at tool hubs without any cost",
  openGraph:{
    title: "Secure Password Generator",
    description: "Create strong and secure passwords effortlessly with our Secure Password Generator tool. Generate unique and secure passwords to enhance the security of your accounts. Enjoy this service at tool hubs without any cost",
    url:"https://tool-hubs.com/secure-password-generator"
 },
 keywords:[
  'Strong passwords',
  'Secure password',
  'Free password tool',
  'Online password generation',
  'Unique passwords',
  'Password security',
  'Random password generator',
  'Secure account passwords',
  'Password strength tool',
  'Create secure passwords',
  'Password complexity',
  'Randomized password creation',
  'Online password manager',
  'Password generator utility',
  'Secure authentication codes',
],
  alternates:{
    canonical:'/secure-password-generator'
  }
}
const Home=()=>{
  return(
    <PasswordGenerator />
  )
}
export default Home;