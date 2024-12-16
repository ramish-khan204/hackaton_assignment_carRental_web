import React from "react";

export default function Contact(){
    return(
        <div className="text-white py-14">
            <div className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-700 py-8 px-6">
                    <div className="col-span-2 space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-bold">Lets collaborate on your upcoming car rental venture</h1>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
                    </div>
                    <div className="grid place-items-center">
                    <a href="#" className=" text-black inline-block font-semibold py-2 px-6 bg-slate-300 rounded-lg tracking-wider uppercase hover:bg-slate-400 duration-300">Contact</a>
                    </div>

                </div>
               

            </div>
        </div>
    )
}