import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CookiesConsentPopup from "./component/cookies";
import InternalLinking from "./component/internalNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://tool-hubs.com'),
  title: "tool hubs",
  
  description: "Enhance productivity with Tool Hubs' versatile conversion tools. Whether it's the Mass Converter or CSS Unit Converter, Tool Hubs simplifies your workflow. Explore now for efficient task management at Tool Hubs!",
  alternates:{
    canonical:'/'
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
  
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'android-chrome-192x192',
      sizes: '192x192',
      url: '/android-chrome-192x192.png',
    },
    {
      rel: 'android-chrome-512x512',
      sizes: '512x512',
      url: '/android-chrome-512x512.png',
    },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7368468082508040"
     crossOrigin="anonymous"></script>
     </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <InternalLinking />
        <CookiesConsentPopup />
      <Footer />

      </body>
    </html>
  );
}
