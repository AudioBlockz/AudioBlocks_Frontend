// import { ArrowRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='w-full z-10 sticky bg-black/20  backdrop-blur-md top-0'>
//         <div className='flex items-center justify-between px-3 py-4 md:py-6 w-11/12 mx-auto'>
//         <div>
//             <Image src='/logo.svg' height={40} width={40} alt='AudioBlocks Logo' />
//         </div>
//          <div className="w-[375px] h-[61px] rounded-full border border-gray-800 p-2 flex items-center justify-between">
//         <Link
//           href="/"
//           className=" text-[#6B4C87] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6B4C87] transition-colors duration-200 border-1 border-[#6B4C87]"
//         >
//           Home
//         </Link>

//         <Link
//           href="/marketPlace"
//           className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
//         >
//           Marketplace
//         </Link>

//         <Link
//           href="/"
//           className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
//         >
//           Collective
//         </Link>
//       </div>
//         <div>
// <button className="w-[145px] h-[48px] pt-2 pr-2 pb-2 pl-4 gap-7 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex items-center text-white font-medium transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl">
//             Sign in
//             <div className="bg-black rounded-full p-1">
//               <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
//             </div>
//           </button>        
//         </div>
//         </div>

//     </nav>
//   )
// }

// export default Navbar


"use client"

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full z-10 sticky top-0 bg-black/20 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-4 md:py-6 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            height={40}
            width={40}
            alt="AudioBlocks Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[375px] h-[61px] rounded-full border border-gray-800 p-2 items-center justify-between">
          <Link
            href="/"
            className="text-[#6B4C87] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6B4C87] transition-colors duration-200 border border-[#6B4C87]"
          >
            Home
          </Link>
          <Link
            href="/marketPlace"
            className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            Marketplace
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            Collective
          </Link>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:flex">
          <button className="w-[145px] h-[48px] px-4 gap-3 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex items-center text-white font-medium transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl">
            Sign in
            <div className="bg-black rounded-full p-1">
              <ArrowRight className="h-4 w-4 rotate-[300deg]" />
            </div>
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D2045B]"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black/80 backdrop-blur-md border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/"
              className="w-full text-center text-gray-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/marketPlace"
              className="w-full text-center text-gray-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/"
              className="w-full text-center text-gray-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Collective
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-[145px] h-[44px] px-4 gap-3 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex items-center justify-center text-white font-medium transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign in
              <div className="bg-black rounded-full p-1">
                <ArrowRight className="h-4 w-4 rotate-[300deg]" />
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
