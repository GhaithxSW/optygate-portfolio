"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-20 h-20 border border-primary/20 rotate-45"
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-16 h-16 rounded-full border border-primary/30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-24">
        {/* Main Logo */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-[320px] md:w-[450px] lg:w-[550px] mx-auto"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/logos/logo-full.svg"
              alt="Optygate - The Gateway to the Future"
              width={550}
              height={150}
              className="w-full h-auto drop-shadow-[0_0_60px_rgba(98,82,215,0.4)]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-silver text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore our portfolio of{" "}
          <span className="text-white font-semibold">innovative solutions</span>{" "}
          — from automation and software development to IT infrastructure and beyond.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 glow-primary hover:glow-primary-strong group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View Our Work
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
