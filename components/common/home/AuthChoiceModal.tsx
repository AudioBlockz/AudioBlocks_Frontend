'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
  onRegister: () => void;
};

const AuthChoiceModal = ({ open, onClose, onLogin, onRegister }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-[1200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-[1300] w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#1a1a1a] border border-gray-800 p-6 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Welcome to AudioBlocks
            </h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Please login or create an account to continue streaming.
            </p>

            {/* Buttons side by side */}
            <div className="flex gap-6 w-4/5 mx-auto">
              <button
                onClick={onLogin}
                className="px-4 flex-1 cursor-pointer py-2 gap-2 rounded-full bg-transparent border border-[#D2045B] hover:bg-[#B8043F] flex justify-between items-center text-white font-bold transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
              >
                 Login
                <div className="bg-black rounded-full p-1">
                  <ArrowRight className="h-3 w-3 rotate-[300deg]" />
                </div>
              </button>

              <button
                onClick={onRegister}
                 className="px-4 flex-1 cursor-pointer py-2 gap-2 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex justify-between items-center text-white font-bold transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up
                <div className="bg-black rounded-full p-1">
                  <ArrowRight className="h-3 w-3 rotate-[300deg]" />
                </div>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthChoiceModal;
