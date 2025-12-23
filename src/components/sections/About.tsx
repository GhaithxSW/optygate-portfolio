"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    icon: Cpu,
    title: "Automation",
    description:
      "Streamline operations with intelligent automation that reduces manual effort and eliminates errors.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies to solve your unique challenges.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Robust and scalable infrastructure solutions that power your digital transformation.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation strategies that future-proof your business.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="About Optygate"
          subtitle="Your trusted partner for technology solutions worldwide"
        />

        {/* Company Overview */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-silver text-lg md:text-xl leading-relaxed">
            Optygate is a leading technology solutions provider specializing in
            automation, software development, IT infrastructure, and digital
            transformation. We help businesses worldwide optimize their operations, reduce
            costs, and achieve measurable results through innovative technology
            solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.h3
          className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-6 rounded-2xl glass border border-accent-border hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h4 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-silver text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
