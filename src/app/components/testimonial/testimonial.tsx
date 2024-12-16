import React from "react";
import Image from "next/image";
export default function Testimonial(){
    return(
        <div className="py-14 pb-24">
            <div className=" container">
                {/* header */}
                <div className="space-y-4 pb-12">
                    <p className="text-3xl font-semibold font-serif text-center sm:text-4xl">What Our Client Say About Us</p>
                    <p className=" text-center sm:px-44">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>

                    <div className="space-y-3 sm:space-y-6 p-4  relative">
              <div className="flex sm:flex-col md:flex-row justify-between mt-7 gap-x-16 items-center">
            <div className=" sm:space-y-6 p-4 bg-gray-300 sm:py-12 rounded-lg">
            <div className="w-[200px] h-[170px] flex justify-center rounded-full items-center">

                <Image className="h-20 w-20 rounded-full" src={"/pic1.png"} width={200} height={100} alt="image"></Image>
            </div> 
            {/* title */}
              <div className="flex flex-col">
                <p className="text-center font-bold">Nissan GT - R</p>
                <span className="font-bold pt-3 text-center">⭐️⭐️⭐️⭐️⭐️</span>
                <span className="font-semibold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </div>
            </div>
            <div className=" sm:space-y-6 p-4 bg-gray-300  sm:py-12 rounded-lg">
            <div className="w-[200px] h-[170px] flex justify-center rounded-full items-center">
                <Image className="h-20 w-20 rounded-full" src={"/image.png"} width={200} height={100} alt="image"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <p className="text-center font-bold">Nissan GT - R</p>
                <span className="font-bold pt-3 text-center">⭐️⭐️⭐️⭐️⭐️</span>
                <span className="font-semibold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </div>
            </div>
            <div className=" sm:space-y-6 p-4 bg-gray-300  sm:py-12 rounded-lg">
            <div className="w-[200px] h-[170px]  flex justify-center rounded-full items-center">
                <Image className="h-20 w-20 rounded-full" src={"/image2.png"} width={200} height={100} alt="image"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <p className="text-center font-bold">Nissan GT - R</p>
                <span className="font-bold pt-3 text-center">⭐️⭐️⭐️⭐️⭐️</span>
                <span className="font-semibold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </div>
            </div>
              </div> 

              {/* <div className="text-2xl">⭐️⭐️⭐️⭐️⭐️</div> */}


                 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}