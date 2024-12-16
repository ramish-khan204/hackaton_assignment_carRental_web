import React from "react";
import Image from "next/image";
export default function Carlist(){
    return(
        <div className="pb-24">
            <div className="container">
             {/* heading */}
             <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 mt-20">Rental Summary</h1>
             <p className="text-sm pb-10">Prices may change depending on the length of the rental and the price of your rental car.</p>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">  </div>
            </div>
            {/* title */}
           
              <div className="space-y-3 relative">
              <div className="flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">

                <Image className="object-contain" src={"/car2.png"} width={150} height={100} alt="image"></Image>
            </div> 
            {/* title */}
              <div className="flex flex-col">
                <span className="font-bold pt-3">CR-V</span>
                <span className="text-red-500">$80/Day</span>
              </div>
            </div>
            <div>
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                <Image className="object-contain" src={"/car2.png"} width={150} height={100} alt="image"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
                <span className="font-bold pt-3">CR-V</span><span className="text-red-500">$80/Day</span>
              </div>
            </div>
            <div>
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center mr-10">
                <Image className="object-contain" src={"/car2.png"} width={150} height={100} alt="image"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
                <span className="font-bold pt-3">CR-V</span>
                <span className="text-red-500">$80/Day</span>
              </div>
            </div>
              </div> 
              
              <div className="grid place-content-center mt-8">
              <button className="button-outline">Rent Now

</button>
</div>
            </div>
        </div>
    )
}