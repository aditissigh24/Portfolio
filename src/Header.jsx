import React from 'react'
export default function Header() {
  return (
        <div className=' flex  items-center sticky top-0 left-0 bg-white shadow-md  w-full p-4'>
            <h1 className='text-[#024950] text-[2vw] font-semibold ml-[5vw]'>Aditi Singh</h1>
            <ul className='flex flex-row ml-[24vw]'>
                <li className='mr-[4vw] text-[1.25vw] hover:text-[#AC3B61]'>
                    <a href='#'>Home</a>
                </li>
                <li className='mr-[4vw] text-[1.25vw] hover:text-[#AC3B61]'>
                    <a href='#'>About</a>
                </li>
                <li className='mr-[4vw] text-[1.25vw] hover:text-[#AC3B61]'>
                 </li>
                 <a href='#'>Projects</a>
                  <li className='text-[1.25vw] hover:text-[#AC3B61]'>
                    <a href='#'>Contact</a>
                </li>
            </ul>       
        </div>
  )
}



