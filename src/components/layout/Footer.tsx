"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "https://optygate.com", label: "Main Site", external: true },
];

export function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/logo-full.svg"
                alt="Optygate"
                width={220}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            <p className="text-silver max-w-md leading-relaxed">
              The Gateway to the Future. We deliver cutting-edge technology solutions
              that transform businesses worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-silver hover:text-white transition-colors group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-silver hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+971507929238"
                className="flex items-center gap-3 text-silver hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +971 50 792 9238
              </a>
              <a
                href="mailto:info@optygate.com"
                className="flex items-center gap-3 text-silver hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@optygate.com
              </a>
              <div className="flex items-center gap-3 text-silver">
                <MapPin className="w-4 h-4 text-primary" />
                Dubai, UAE
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-10 bg-accent-border" />

        {/* Bottom Bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-silver-dark text-sm">
            &copy; {new Date().getFullYear()} Optygate. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
