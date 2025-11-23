"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import "./footer.css";

const Footer: React.FC = () => (
  <footer className="footer bg-slate-950 text-white py-10">
    <div className="footer-content max-w-7xl mx-auto text-center space-y-8">
      
      {/* Logo */}
      <motion.div
        className="footer-logo text-2xl font-bold text-green-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/">STF Automotive Information</Link>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="footer-nav flex justify-center gap-6 text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link href="/about" className="footer-link hover:text-green-400 transition-colors">About</Link>
        <Link href="/contact" className="footer-link hover:text-green-400 transition-colors">Contact</Link>
        <Link href="/privacy" className="footer-link hover:text-green-400 transition-colors">Privacy Policy</Link>
      </motion.nav>

      {/* Social Media */}
      <motion.div
        className="footer-social flex justify-center gap-6 text-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {[
          { icon: <FaFacebookF />, url: "https://facebook.com" },
          { icon: <FaTwitter />, url: "https://twitter.com" },
          { icon: <FaInstagram />, url: "https://instagram.com" },
          { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-green-400 transition-colors"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="footer-copy text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        &copy; {new Date().getFullYear()} Battery App. All rights reserved.
      </motion.div>
    </div>
  </footer>
);

export default Footer;
