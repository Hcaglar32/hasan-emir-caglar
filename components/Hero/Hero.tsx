"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { IconDownload, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { getAssetPath } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20 pt-36">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(16, 185, 129, 0.3)"
      />
      
      {/* Aceternity UI Style Background - Projelerle Aynı */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        
        {/* Animated Gradient Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Diagonal Lines */}
          <motion.line
            x1="0%"
            y1="20%"
            x2="100%"
            y2="80%"
            stroke="url(#heroGrad1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.line
            x1="100%"
            y1="30%"
            x2="0%"
            y2="70%"
            stroke="url(#heroGrad2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/20 rounded-br-3xl" />
      </div>
      
      {/* Radial Mask */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">İş fırsatlarına açığım</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground">Merhaba, Ben</span>
              <br />
              <span className="bg-clip-text inline-block text-transparent bg-gradient-to-r  from-emerald-400 via-cyan-400 to-emerald-400">
                <TypeAnimation
                  sequence={[
                    "Hasan Çağlar",
                    2000,
                    "Frontend Dev.",
                    2000,
                    "React Geliştirici",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* Description */}
            <TextGenerateEffect
              words="3 yıllık Frontend Developer deneyimimle kurumsal web siteleri ve modern web uygulamaları geliştiriyorum. UI/UX tasarımlarını pixel-perfect koda dönüştürüyor, performans odaklı çözümler üretiyorum."
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MovingBorderButton
                as="a"
                href="mailto:hasan.49.5012@gmail.com"
                borderRadius="1.5rem"
                className="bg-background hover:bg-emerald-500/10 transition-colors"
                containerClassName="h-12 w-full sm:w-44"
              >
                <IconMail className="mr-2 h-4 w-4" />
                Bana Ulaş
              </MovingBorderButton>

              <a
                href={getAssetPath("/hasan_emir_caglar.pdf")}
                download="hasan_emir_caglar.pdf"
                className="h-12 px-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-foreground font-medium"
              >
                <IconDownload className="h-4 w-4" />
                CV İndir
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/Hcaglar32"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group"
              >
                <IconBrandGithub className="h-5 w-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/hasan-emir-caglar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group"
              >
                <IconBrandLinkedin className="h-5 w-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              
              {/* Border Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500">
                <div className="p-1 rounded-full bg-background">
                  <Image
                    alt="Hasan Emir Çağlar - Frontend Developer"
                    src={getAssetPath("/ben.JPG")}
                    width={320}
                    height={320}
                    className="rounded-full object-cover w-[250px] h-[250px] lg:w-[320px] lg:h-[320px]"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-card border border-white/10 shadow-xl"
              >
                <span className="text-sm font-medium text-foreground">3+ Yıl Deneyim</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
