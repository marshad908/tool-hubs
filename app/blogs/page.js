import Link from "next/link"


const Blogs=()=>{
    return(
        <div className=' w-full min-h-screen '>
            <div className=' w-full py-20 bg-gray-800'>
            <h1 className='container mx-auto text-center  text-white font-bold text-4xl'>Read Our Blogs to Explore our tools</h1>
            </div>
            <div className='container mx-auto flex flex-col px-4 my-8 w-full md:w-1/2'>
                <Link href="/how-many-yards-are-in-a-meter" >
                <div className="bg-white p-6 rounded-md shadow-md hover:shadow-2xl hover:ease-in-out hover:duration-150 cursor-pointer flex flex-col gap-4">
                    <h2 className="text-2xl font-medium text-blue-500 underline">How Many Yards are in a Meter ?</h2>
                    <p>Before delving into the conversion between meters and yards, it's crucial to understand the fundamental definitions of these units. A meter is the base unit of length in the International System of Units (SI), defined as the distance traveled by light in a vacuum in 1/299,792,458 seconds ....</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Blogs