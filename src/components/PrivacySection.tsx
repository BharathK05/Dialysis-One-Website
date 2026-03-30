"use client";

import { motion } from "framer-motion";
import { FileKey } from "lucide-react";
import Link from "next/link";

const AppleLogo = ({ className }: {className?: string}) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export default function PrivacySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:bg-white lg:dark:bg-[#111111] lg:border border-black/5 dark:border-white/10 lg:rounded-[48px] lg:p-12 overflow-hidden shadow-sm">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center pb-8 lg:pb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-green/20 blur-[80px] rounded-full" />
            <div className="relative w-64 h-64 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-3xl rounded-full flex flex-col items-center justify-center p-8 shadow-2xl">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <AppleLogo className="w-16 h-16 text-black/80 dark:text-white/80 mb-4" />
              </motion.div>
              <p className="text-center font-bold tracking-widest uppercase text-xs text-black/40 dark:text-white/40">Secure Enclave</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy is a <br/> human right.
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 mb-6 leading-relaxed">
            Your medical records, daily habits, and vitals belong to you. Dialysis One is encrypted end-to-end, meaning even we can't see your data unless you explicitly choose to share it with your doctor.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <FileKey className="w-5 h-5 text-brand-green" />
              <span className="font-medium">On-device processing when possible</span>
            </li>
            <li className="flex items-center gap-3">
              <FileKey className="w-5 h-5 text-brand-green" />
              <span className="font-medium">HIPAA-Compliant infrastructure</span>
            </li>
            <li className="flex items-center gap-3">
              <FileKey className="w-5 h-5 text-brand-green" />
              <span className="font-medium">Zero targeted advertising</span>
            </li>
          </ul>

          <Link href="/privacy">
            <button className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-colors">
              Read our Privacy Policy
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
