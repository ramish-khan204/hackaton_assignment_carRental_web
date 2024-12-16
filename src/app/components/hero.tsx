import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='text-black bg-slate-100'>
        <div className='container min-h-[620px] flex md:w-[1330px] sm:h-full md:h-[440px] '>
           <div className='grid place-items-center grid-cols-1 sm:grid-cols-3'>
            <div className='order-1 sm:order-2'>
                <Image src={"/car.png"}alt="image" width={363} height={100} ></Image>
            </div>
             <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                <p className='text-gray-700 text-2xl font-serif'>
                    Effortless
                </p>
                <i><h1 className='text-5xl lg:text-7xl font-semibold font-serif border-b-2 border-gray-300'> Car Rental</h1></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero impedit enim. Tenetur eligendi exercitationem ullam consequatur libero vero, voluptatem atque rerum laboriosam enim corporis dignissimos quaerat, repudiandae error doloribus.</p>
            <button className='btn bg-gray-400 px-6 py-2 rounded-md hover:bg-gray-500 duration-300'>Get Started

            </button>
             </div>
           </div>
        </div>
      
    </div>
  )
}


