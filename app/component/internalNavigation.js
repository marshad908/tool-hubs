import Link from "next/link"


const InternalLinking =()=>{
    return(
        <div className="container mx-auto p-8 w-full md:w-1/2 flex flex-col  md:flex-row justify-between">
            
            <div className="w-full md:w-1/2">
                <ul className="list-disc flex flex-col gap-4">
                <li><Link href="/image-format-converter" className="text-blue-500 underline ">Image Format Converter</Link></li>
                <li><Link href="/temperature-converter" className="text-blue-500 underline ">Temperature Converter</Link></li>
                <li><Link href="/mass-calculator" className="text-blue-500 underline ">Mass Converter</Link></li>
                <li><Link href="/length-calculator" className="text-blue-500 underline ">Length Converter</Link></li>
                <li><Link href="/word-counter-online" className="text-blue-500 underline ">Words Counter Online</Link></li>
                <li><Link href="/json-conversion" className="text-blue-500 underline ">Minify/Unminify JSON</Link></li>
                </ul>
            </div>
            <div className="w-full md:w-1/2">
            <ul className="list-disc flex flex-col gap-4">
                <li><Link href="/csv-to-json" className="text-blue-500 underline ">CSV To JSON</Link></li>
                <li><Link href="/json-to-csv" className="text-blue-500 underline ">JSON To CSV</Link></li>
                <li><Link href="/secure-password-generator" className="text-blue-500 underline ">Secure Password Generator</Link></li>
                <li><Link href="/css-unit-converter" className="text-blue-500 underline ">CSS Unit Converter</Link></li>
                <li><Link href="/color-palette" className="text-blue-500 underline ">Color Palette Generator</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default InternalLinking