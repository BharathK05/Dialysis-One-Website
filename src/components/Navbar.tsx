"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-white/60 dark:bg-[#0A0A0A]/60 border-b border-black/5 dark:border-white/5"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
          <Image src="/logo.png" alt="Dialysis One Logo" fill className="object-contain" />
        </div>
        <span className="font-bold text-lg tracking-tight">Dialysis One</span>
      </Link>

      <div>
        <Link href="https://apps.apple.com/in/app/dialysisone/id6759790005" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-brand-green/20 transition-shadow hover:shadow-brand-green/40"
          >
            Download
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
