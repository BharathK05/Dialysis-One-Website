"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-16">

        {/* Left Content */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-start text-left lg:w-1/2 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-6 ring-1 ring-brand-green/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Now Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white leading-[1.05]"
          >
            Dialysis Management<br className="hidden md:block" /> Redefined.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl text-black/60 dark:text-white/60 max-w-xl font-medium leading-relaxed"
          >
            Empower your health journey with completely automated smart diet tracking, life-saving hydration rings, and seamless secure clinical sharing. Designed to let you focus on living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-start gap-3"
          >
            <motion.a
              href="https://apps.apple.com/in/app/dialysisone/id6759790005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 group hover:shadow-xl transition-all"
            >
              Download
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <span className="text-sm font-medium text-black/50 dark:text-white/50 px-2">
              Available for iPhone and Apple Watch
            </span>
          </motion.div>
        </motion.div>

        {/* Right Floating Device */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
          {/* Decorative Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green/30 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 w-[280px] sm:w-[320px] shrink-0 drop-shadow-2xl shadow-black/20"
          >
            <div className="bg-gray-200/50 dark:bg-white/5 backdrop-blur-md border-[6px] border-white dark:border-white/10 rounded-[48px] aspect-[9/19] overflow-hidden relative shadow-2xl flex items-center justify-center">
              <Image src="/phone-screenshot.png" alt="Dialysis One App UI" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Secondary floating element */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-1/4 -left-10 md:left-10 lg:-left-12 z-20 bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black dark:text-white">Fluid Goal Met</p>
                <p className="text-xs text-black/50 dark:text-white/50">Just now</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
