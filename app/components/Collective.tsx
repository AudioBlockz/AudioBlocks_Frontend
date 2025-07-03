"use client"

import Image from "next/image"

const Collective = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[768px]">
      <Image
        src="/collective.svg"
        alt="Featured content"
        fill
        className="object-cover rounded-lg shadow-2xl"
        priority
      />

      <div className="relative px-4 sm:px-8 md:px-16 lg:ml-56 top-32 md:top-64">
        <div className="w-full max-w-[554px] mb-4 md:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Share Your Sound
          </h1>
        </div>

        <div className="w-full max-w-[419px]">
          <p className="font-poppins font-semibold text-sm sm:text-base leading-5 sm:leading-6 tracking-normal text-white">
            Mint your music as NFTs, earn royalties on every <br className="hidden sm:block" />
            resale, and connect directly with fans who believe <br className="hidden sm:block" />
            in your art.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Collective
