import React from 'react'
import image from './assets/Images/Download premium image of Mountain landscape background, nature design by Adjima about cream backgrounds, minimal backgrounds, zen, sand dunes, and desert 6104675.jpg'

export default function Landing() {
  return (
    <div className ='h-screen w-full '>
        <img src={image} className ='absolute inset-0 w-full h-full object-cover opacity-30 -z-10'/>
            <h1 className ='text-[3.5vw] text-center mt-[10vw] font-bold'>
                HEY, I'M ADITI SINGH
            </h1>
            <h1 className ='text-[1.4vw] m-[2vw] ml-[18vw] mr-[18vw]'>A front-end developer based in India. I have worked on a wide range of 
                front-end projects, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a 
                seamless user experience.
            </h1>
            <button className ="water-button px-14 py-4 z-10 bg-red-500 font-semibold text-lg mr-[3 vw] mt-12 text-white rounded-full">
                Projects 
            </button>
    </div>
  )
}
 