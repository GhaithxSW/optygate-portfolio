"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { GlowBorder } from "@/components/shared/GlowEffect";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 50 792 9238",
    href: "tel:+971507929238",
    description: "Mon-Fri 9am-6pm GST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@optygate.com",
    href: "mailto:info@optygate.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Dubai, UAE",
    href: "https://maps.google.com/?q=Dubai,UAE",
    description: "Global Headquarters",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowBorder animated>
            <div className="p-8 md:p-12 rounded-2xl text-center">
              {/* Heading */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Ready to Transform?
                </h2>
                <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help your business achieve its digital
                  transformation goals.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === "Visit Us" ? "_blank" : undefined}
                    rel={
                      method.label === "Visit Us"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-6 rounded-xl bg-midnight/50 border border-accent-border hover:border-primary/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-silver text-sm mb-1">{method.label}</p>
                    <p className="text-white font-semibold text-lg mb-1 group-hover:text-primary-light transition-colors">
                      {method.value}
                    </p>
                    <p className="text-silver-dark text-xs">
                      {method.description}
                    </p>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a
                  href="mailto:info@optygate.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-300 glow-primary hover:glow-primary-strong"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://optygate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 glass border border-primary/30 hover:border-primary text-white font-semibold rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Main Site
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </GlowBorder>
        </motion.div>
      </div>
    </section>
  );
}
