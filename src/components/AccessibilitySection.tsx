"use client";

import { motion } from "framer-motion";
import { Glasses, Volume2, Contrast } from "lucide-react";

export default function AccessibilitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-32 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Designed for everyone.
            </h2>
            <p className="text-xl text-black/60 dark:text-white/60 max-w-lg leading-relaxed">
              We built Dialysis One following Apple's Human Interface Guidelines. Because great healthcare apps shouldn't require perfect vision, perfect motor skills, or complex navigation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="p-8 rounded-[32px] bg-white dark:bg-[#1A1A1A] shadow-lg shadow-black/5 border border-black/5 dark:border-white/5">
              <Glasses className="w-8 h-8 text-black/80 dark:text-white/80 mb-6" />
              <h4 className="text-lg font-semibold mb-2">Dynamic Type</h4>
              <p className="text-black/60 dark:text-white/60 text-sm">Full support for iOS Dynamic Type. Text scales seamlessly without breaking layouts.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-8 rounded-[32px] bg-white dark:bg-[#1A1A1A] shadow-lg shadow-black/5 border border-black/5 dark:border-white/5">
              <Volume2 className="w-8 h-8 text-black/80 dark:text-white/80 mb-6" />
              <h4 className="text-lg font-semibold mb-2">VoiceOver Ready</h4>
              <p className="text-black/60 dark:text-white/60 text-sm">Every element is meticulously labeled for screen readers to explain what's happening.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-[32px] bg-white dark:bg-[#1A1A1A] shadow-lg shadow-black/5 border border-black/5 dark:border-white/5">
              <Contrast className="w-8 h-8 text-black/80 dark:text-white/80 mb-6" />
              <h4 className="text-lg font-semibold mb-2">High Contrast Mode</h4>
              <p className="text-black/60 dark:text-white/60 text-sm">Reduced transparency and increased contrast options directly integrated.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
