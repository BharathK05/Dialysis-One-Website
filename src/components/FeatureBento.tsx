"use client";

import { motion } from "framer-motion";
import { Droplet, Utensils, Watch, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Smart Diet Tracking",
    description: "Nutrient balance tailored for renal care. Log your meals with confidence using our comprehensive food database designed specifically for dialysis patients.",
    icon: <Utensils className="w-6 h-6 text-orange-500" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Hydration Rings",
    description: "Apple Watch-inspired daily fluid goals. Visualize your liquid intake with elegant, satisfying progress rings.",
    icon: <Droplet className="w-6 h-6 text-blue-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Medication Reminders",
    description: "Never miss a dose. Timely notifications with high-contrast UI for clear visibility, even on the go.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Apple Watch Sync",
    description: "Log your vitals directly from your wrist. Stay updated on fluid goals and active medication reminders without reaching for your phone.",
    icon: <Watch className="w-6 h-6 text-purple-500" />,
    colSpan: "md:col-span-2",
  },
];

export default function FeatureBento() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Everything you need.<br/> Nothing you don't.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto"
        >
          We've distilled complex medical tracking into a few simple, beautiful interfaces. 
          Manage your health without feeling like a patient.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-[32px] bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-all ${feature.colSpan}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-150 transform">
               {feature.icon}
            </div>
            
            <div className="relative z-10 flex flex-col h-full h-min-[240px]">
              <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-black/60 dark:text-white/60 leading-relaxed font-medium mt-auto">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
