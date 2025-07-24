"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FiUser, FiRepeat, FiFolder, FiX } from "react-icons/fi"
import { FaWallet } from "react-icons/fa"
import Link from "next/link"

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative z-50" ref={menuRef}>
      {/* Avatar trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-8 h-8 rounded-full overflow-hidden border border-gray-700 cursor-pointer"
      >
        <Image
          src="/tech.jpg"
          alt="User"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Full height sliding menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-60 h-screen bg-[#111111] shadow-lg border-l border-[#2B2B2B] px-5 py-6 flex flex-col"
          >
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#A3A3A3] hover:text-white absolute top-4 right-4"
            >
              <FiX size={22} />
            </button>

          
            <div className="flex items-center truncate border-b pb-3 gap-3 mb-8 mt-2">
              <Image
                src="/tech.jpg"
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white text-sm">Pete Lisk</p>
                <p className="text-xs overflow-hidden text-ellipsis  text-[#A3A3A3]">petereum@audioblocks.com</p>
              </div>
            </div>

            {/* Menu items */}
            <div className="space-y-6 text-sm text-[#A3A3A3] font-semibold">
              <Link href="/dashboard/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 cursor-pointer hover:text-[#666C6C] transition">
                <FiUser />
                <span>Profile</span>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-3 cursor-pointer hover:text-[#666C6C] transition">
                <FiRepeat />
                <span>Swap</span>
              </Link>
              <Link href="/dashboard/collection" onClick={() => setIsOpen(false)} className="flex items-center gap-3 cursor-pointer hover:text-[#666C6C] transition">
                <FiFolder />
                <span>My Collections</span>
              </Link>
              <div className="flex items-center gap-3 text-gray-400 mt-8">
                <FaWallet />
                <span>Balance:</span>
                <span className="font-medium text-[#666C6C]">11000 ABT</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserMenu
