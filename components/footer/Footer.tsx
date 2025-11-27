"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconCode,
  IconHeart,
  IconBrandReact,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Hcaglar32",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hasan-emir-caglar",
    icon: IconBrandLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/caglaremirr",
    icon: IconBrandInstagram,
  },
  {
    name: "Email",
    href: "mailto:hasan.49.5012@gmail.com",
    icon: IconMail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Aceternity UI Style Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f05_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_100%)]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-purple-500/20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/30 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 bg-card/50 backdrop-blur-sm border border-white/[0.1]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <IconSparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">İş fırsatlarına açık</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-4">
                    Birlikte Harika Projeler
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      Geliştirelim
                    </span>
                  </h3>
                  
                  <p className="text-muted-foreground max-w-md mb-6">
                    Modern web teknolojileri ile hayalinizdeki projeyi gerçeğe dönüştürelim. 
                    Yeni fırsatlar için her zaman hazırım.
                  </p>

                  <a
                    href="mailto:hasan.49.5012@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all group"
                  >
                    <IconMail className="h-5 w-5" />
                    Bana Ulaş
                    <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Right Side - Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                  <div className="relative p-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10">
                    <div className="p-6 rounded-full bg-card border border-white/10">
                      <IconBrandReact className="h-16 w-16 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 p-2 rounded-full bg-card border border-white/10">
                    <IconCode className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 p-2 rounded-full bg-card border border-white/10">
                    <IconSparkles className="h-4 w-4 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <IconCode className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="text-lg font-bold font-display text-foreground">
              Hasan<span className="text-emerald-400">.</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Hasan Emir Çağlar. Made with
            <IconHeart className="h-4 w-4 text-red-500 inline" />
            in Turkey
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Hakkımda
            </Link>
            <Link
              href="#project"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projeler
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
