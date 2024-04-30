import WordCounter from "../component/wordsCounter";

export const metadata={
  metadataBase: new URL('https://tool-hubs.com'),
  title: "Word Counter online",
    description: "Effortlessly count words in your text with our online Word Counter tool. A quick and reliable way to determine the word count in your content. Completely free of charge at tool hubs.",
  openGraph:{
    title: "Word Counter online",
    description: "Effortlessly count words in your text with our online Word Counter tool. A quick and reliable way to determine the word count in your content. Completely free of charge at tool hubs.",
    url:"https://tool-hubs.com/word-counter-online"
  },
  keywords: [
    'Word counting',
    'Text word counter',
    'Free words tool',
    'Online text analysis',
    'Count words in content',
    'Document word count',
    'Character counting tool',
    'Text analysis utility',
    'Online content statistics',
    'Simple word count tool',
    'Word frequency analysis',
    'Text analytics tool',
    'Word occurrence statistics',
    'Content length analysis',
    'Document word counting tool',
  ],
    alternates:{
    canonical:'/word-counter-online'
  }
}
const Home=()=>{
  return(
    <WordCounter />
  )
}
export default Home;