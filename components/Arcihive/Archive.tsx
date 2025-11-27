"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBriefcase,
  IconMail,
  IconArrowRight,
  IconSparkles,
  IconRocket,
  IconCode,
  IconUsers,
  IconTarget,
} from "@tabler/icons-react";

const highlights = [
  {
    icon: IconCode,
    title: "Modern Teknolojiler",
    description: "React, Next.js, TypeScript, Laravel",
  },
  {
    icon: IconRocket,
    title: "Hızlı Adaptasyon",
    description: "Yeni teknolojilere hızlı uyum",
  },
  {
    icon: IconUsers,
    title: "Takım Çalışması",
    description: "Agile & Scrum deneyimi",
  },
  {
    icon: IconTarget,
    title: "Sonuç Odaklı",
    description: "Deadline'lara uygun teslimat",
  },
];

const Archive = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Aceternity UI Style Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[80px]" />
        
        {/* Corner Accents */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-emerald-500/10 rounded-tl-2xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-500/10 rounded-br-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-purple-500/30 opacity-30" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-card via-card to-emerald-950/20 rounded-3xl" />
            
            {/* Static Code SVG - Sağ Alt (Arka Planda) - Optimized */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-72 md:h-72 opacity-10 pointer-events-none overflow-hidden z-0 hidden md:block">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Terminal Window */}
                <rect
                  x="20"
                  y="20"
                  width="160"
                  height="120"
                  rx="8"
                  fill="none"
                  stroke="url(#codeGradient)"
                  strokeWidth="2"
                />
                
                {/* Terminal Header */}
                <line
                  x1="20"
                  y1="40"
                  x2="180"
                  y2="40"
                  stroke="url(#codeGradient)"
                  strokeWidth="1"
                />
                
                {/* Terminal Dots */}
                <circle cx="35" cy="30" r="4" fill="#ef4444" />
                <circle cx="50" cy="30" r="4" fill="#eab308" />
                <circle cx="65" cy="30" r="4" fill="#22c55e" />
                
                {/* Code Lines - Static */}
                <rect x="30" y="55" width="80" height="6" rx="2" fill="url(#codeGradient)" opacity="0.8" />
                <rect x="30" y="70" width="120" height="6" rx="2" fill="url(#codeGradient)" opacity="0.7" />
                <rect x="45" y="85" width="90" height="6" rx="2" fill="url(#codeGradient)" opacity="0.6" />
                <rect x="45" y="100" width="60" height="6" rx="2" fill="url(#codeGradient)" opacity="0.5" />
                <rect x="30" y="115" width="100" height="6" rx="2" fill="url(#codeGradient)" opacity="0.4" />
                
                {/* Code Brackets */}
                <text x="150" y="170" fill="url(#codeGradient)" fontSize="24" fontFamily="monospace" opacity="0.5">{"</>"}</text>
                <text x="30" y="180" fill="url(#codeGradient)" fontSize="20" fontFamily="monospace" opacity="0.4">{"{ }"}</text>
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6"
              >
                <IconSparkles className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">
                  Aktif Olarak İş Arıyorum
                </span>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4"
                  >
                    Ekibinize{" "}
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Değer Katmaya
                    </span>{" "}
                    Hazırım
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6"
                  >
                    3 yıllık deneyimimle frontend ağırlıklı, full-stack projeler 
                    geliştirebilen bir developer olarak şirketinizin dijital 
                    dönüşümüne katkı sağlamak istiyorum. Hızlı öğrenme yeteneğim, 
                    takım çalışmasına yatkınlığım ve sonuç odaklı yaklaşımımla 
                    ekibinizin bir parçası olmaktan mutluluk duyarım.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    <Link
                      href="mailto:hasanemircaglar@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity group"
                    >
                      <IconMail className="h-5 w-5" />
                      İletişime Geç
                      <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#project"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-foreground font-medium"
                    >
                      <IconBriefcase className="h-5 w-5" />
                      Projelerimi İncele
                    </Link>
                  </motion.div>
                </div>

                {/* Right Content - Highlights */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="p-2 rounded-xl bg-emerald-500/10 w-fit mb-3 group-hover:bg-emerald-500/20 transition-colors">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    3+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Yıl Deneyim
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    18+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Tamamlanan Proje
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    10+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Teknoloji
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Archive;
