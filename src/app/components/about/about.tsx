import React from "react";
import Image from "next/image"; 

export default function About(){
    return(
        <div className="sm:min-h-[600px] sm:place-self-center bg-slate-100 h-full w-full">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div>
                      <Image src={"/car.png"} alt="image" width={250} height={100}></Image>
                    </div>
                     
                    <div>
                        <div className="space-y-5 sm:p-16 pb-6">
                            <i><h1 className="text-3xl sm:text-4xl font-bold font-serif">About Us</h1></i>
                         <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, est! Voluptas quos facilis fugiat soluta temporibus voluptate eius nesciunt animi labore. Iusto fugit eos doloribus repellat exercitationem, enim nisi neque.
                         </p>
                         <button className="button-outline">Get Started

                         </button>
                        </div>
                    </div>
        

                </div>
            </div>
        </div>
    )
}