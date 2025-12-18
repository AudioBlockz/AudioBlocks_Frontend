'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Variants, motion, AnimatePresence } from 'framer-motion';
import { DynamicUserProfile } from '@dynamic-labs/sdk-react-core';
import FullScreenLoader from '@/components/common/home/FullScreenLoader';
import { useAuthFlow } from '@/hooks/useAuthFlow';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketPlace' },
  { name: 'Collective', href: '/collective' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const { user, loading, startLogin, startRegister, logout } = useAuthFlow();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-[#6B4C87] px-6 py-2 rounded-full text-sm font-medium bg-transparent bg-opacity-10 border border-[#6B4C87]'
      : 'text-gray-300 hover:text-white px-6 py-2 text-sm font-medium transition-colors duration-200';

  const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-lg' : 'bg-[#0f0f0f]'
        }`}
      >
        <div className="flex h-[70px] items-center justify-between px-4 md:px-8">
          {/* Logo */}
          
          <Link href="/" className="relative w-24 h-24">
            <Image src="/logo2.png" alt="AudioBlocks Logo" fill className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex bg-[#0F0F0F] rounded-full border border-gray-800 p-1 items-center justify-between">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="#" className={linkClass('#')}>
              Artist Hub
            </Link>
            <Link href="/marketPlace" className={linkClass('/marketPlace')}>
              Marketplace
            </Link>
            <Link href="/collective" className={linkClass('/collective')}>
              Collective
            </Link>
          </div>

          {/* Desktop Sign In */}
          <div className="hidden md:flex">
            {!user?.userId ? (
              <div className="flex gap-4">
                <button
                  onClick={startLogin}
                  className="px-4 cursor-pointer py-1 gap-2 rounded-full bg-transparent border border-[#D2045B] hover:bg-[#B8043F] flex justify-between items-center text-white font-bold transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Login
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-3 w-3 rotate-[300deg]" />
                  </div>
                </button>

                <button
                  onClick={startRegister}
                  className="px-4 cursor-pointer py-1 gap-2 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex justify-between items-center text-white font-bold transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign up
                  <div className="bg-black rounded-full p-1">
                    <ArrowRight className="h-3 w-3 rotate-[300deg]" />
                  </div>
                </button>
              </div>
            ) : (
              <button
                className="px-4 cursor-pointer py-2 gap-3 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex justify-between items-center text-white font-bold transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
                // onClick={() => setShowDynamicUserProfile(true)}
                onClick={logout}
              >
                Log Out
              </button>
            )}
            <DynamicUserProfile />
          </div>

          {/* Mobile Menu Button */}
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
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1200]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#0f0f0f] z-[1300] shadow-xl border-l border-gray-800 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <div className="relative w-10 h-10">
                  <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 cursor-pointer hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-5 px-6 py-6">
                {navLinks.map(({ name, href }) => (
                  <motion.div key={href} variants={itemVariants}>
                    <Link
                      href={href}
                      className="block text-base cursor-pointer font-bold text-gray-200 hover:text-[#D2045B]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </motion.div>
                ))}

                {/* Auth Buttons */}
                {!user?.userId ? (
                  <motion.div variants={itemVariants} className="flex gap-3 mt-6">
                    <button
                      onClick={startLogin}
                      className="flex-1 px-4 py-2 cursor-pointer text-sm rounded-full bg-[#D2045B] hover:bg-[#B8043F] text-white font-semibold flex justify-center items-center gap-2"
                    >
                      Login
                      <ArrowRight className="h-4 w-4 rotate-[300deg]" />
                    </button>
                    <button
                      onClick={startRegister}
                      className="flex-1 px-4 py-2 cursor-pointer text-sm rounded-full border border-[#D2045B] hover:bg-[#D2045B] hover:text-white text-[#D2045B] font-semibold flex justify-center items-center gap-2"
                    >
                      Sign up
                      <ArrowRight className="h-4 w-4 rotate-[300deg]" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={logout}
                      className="w-full px-4 py-2 cursor-pointer rounded-full bg-[#D2045B] hover:bg-[#B8043F] text-white font-semibold flex justify-center items-center gap-2 mt-6"
                    >
                      Log Out
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {loading && <FullScreenLoader />}
    </nav>
  );
};

export default Navbar;
