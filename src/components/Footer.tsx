"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-20 mt-12 bg-[#0A0A0A]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 group mb-6">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/logo.png" alt="Dialysis One Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white font-inter">Dialysis One</span>
          </Link>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-8">
            Manage your dialysis life effortlessly. Designed with care, precision, and privacy at its core.
          </p>
          <div className="flex gap-4 items-center">
            <a href="mailto:dialysisoneapp@gmail.com" className="text-xs font-semibold px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white/80">
              Mail
            </a>
            <a href="#" className="text-xs font-semibold px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white/80">
              Twitter
            </a>
            <a href="#" className="text-xs font-semibold px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white/80">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Product</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
            <li><Link href="#download" className="hover:text-white transition-colors">Download</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Legal & Support</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><a href="mailto:dialysisoneapp@gmail.com" className="hover:text-white transition-colors">dialysisoneapp@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Dialysis One. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
           {/* Mock App Store Badge */}
           <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-semibold cursor-pointer hover:scale-105 transition-transform">
             <Activity className="w-4 h-4" />
             Download on the App Store
           </div>
        </div>
      </div>
    </footer>
  );
}
