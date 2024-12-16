import Link from "next/link";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="sm:w-[1100px] md:w-[1330px] sm:h-full md:h-[440px] sm:text-center top-[1191px] text-white bg-black mt-14 rounded-t-3xl">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3 py-5">
                    {/* Company details */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 ">Car Rental</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil itaque excepturi ut perspiciatis rem perferendis delectus repellat unde, ullam nam animi libero.
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Hyderabad,Sindh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt/>
                            <p>+92 3098657536</p>
                        </div>
                        {/* social handles */}
                        <div className="flex items-center gap-3 mt-6 text-3xl hover:text-gray-200 duration-300">
                            <a href="#">
                            <FaInstagram/>
                            </a>
                        
                        {/* <div className="flex items-center gap-3 text-3xl hover:text-gray-200 duration-300"> */}
                            <a href="#">
                            <FaFacebook/>
                            </a>
                    
                        {/* <div className="flex items-center gap-3 text-3xl hover:text-gray-200 duration-300"> */}
                            <a href="#">
                            <FaLinkedin/>
                            </a>
                            </div>
                            </div>
                            {/* navlinks */}
                            <div className="grid gird-col-2 sm:grid-cols-3 md:gap-80 md:pl-10 py-8 px-4 ">
                                <div>
                                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3">
                                        Important Links
                                    </h1>
                                    <ul className="flex flex-col gap-3">
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                           <Link href="/#">Home</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#about">About Us</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#contact">Contact</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                                <div>
                                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
                                     Links
                                    </h1>
                                    <ul className="flex flex-col  gap-3">
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                           <Link href="/#">Home</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#about">About Us</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#contact">Contact</Link>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div>
                                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
                                        Location
                                    </h1>
                                    <ul className="flex flex-col gap-3">
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                           <Link href="/#">Home</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#about">About Us</Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-gray-400 duration-300"><span className="mr-2">&#11162;</span>
                                        <Link href="/#contact">Contact</Link>
                                        </li>
                                        
                                    </ul>
                                </div>

                            </div>
                        
                    </div>


              

            </div>
        </div>
    )
}