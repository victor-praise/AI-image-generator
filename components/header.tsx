import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
        <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
            <div >
            <h1 className='font-bold'>
                <span className='text-violet-500'>AI</span> Image Generator
            </h1>
            <h2 className="text-xs">
                Powered by DALL.E 2, Chat GPT
            </h2>
        </div>
        </div>
    
        <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
        <Link
          href="https://victor-portfolio-1f3051.netlify.app/"
          className="px-2 font-light text-right"
        >
          Portfolio
        </Link>
        <Link
          href="https://github.com/victor-praise/AI-image-generator"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
        </div>
    </header>
  )
}

export default header