"use client"

import Image from "next/image"
import Link from "next/link"

const NotFound =()=> {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Circles Image */}
      <Image
        src="/circle-bg.svg" // <--- make sure this matches the uploaded image name
        alt="Background Circles"
        fill
        className="object-cover opacity-10 pointer-events-none"
      />

      {/* Content */}
      <div className="z-10 text-center px-4">
        {/* Logo */}
        <Image
          src="/logo.svg" // Replace with your logo path
          alt="AudioBlocks Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="max-w-md mx-auto text-gray-300 text-sm md:text-base">
          The page you're looking for can't be found. Double-check the URL and try again.
          Or click the button below.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-[#D2045B] hover:bg-[#B8043F] text-white px-6 py-2 rounded-full transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
export default  NotFound;