import Link from "next/link"

export default function Navbar(){
    return(
        <div>
        <div className="w-[full] h-[70px] mr-60 mt-3 relative left-[135px] flex border-b-2">
            <div className="w-[859px] h-[20px] text-black text-[14px] flex justify-between mt-[12px] py-3 md:py-0 ">
                    <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
                <div className="flex sm:flex-col md:flex-row justify-center items-center">
                <ul className="flex gap-x-5 mr-4">
            <li>
            <Link className="hover:underline hover:text-gray-400 transition-colors duration-500 text-lg font-medium" href="#">Home</Link>
            </li>
 
            <li>
            <Link className="hover:underline hover:text-gray-400 transition-colors duration-500 text-lg font-medium" href="#">Cars</Link>
            </li>

            <li>
            <Link className="hover:underline hover:text-gray-400 transition-colors duration-500 text-lg font-medium" href="#">Booking</Link>
            </li>

            <li>
            <Link className="hover:underline hover:text-gray-400 transition-colors duration-500 text-lg font-medium" href="#">About</Link>
            </li>
            </ul>
                </div>
                <div>
                
            

                </div>
            </div>
        </div>
        </div>
    )
}