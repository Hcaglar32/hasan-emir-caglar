"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconCode,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandGit,
  IconBrandFigma,
  IconSchool,
  IconCertificate,
  IconUser,
  IconBriefcase,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandLaravel,
  IconBrandBootstrap,
  IconBrandAlpineJs,
} from "@tabler/icons-react";

const skills = [
  { name: "React.js", icon: IconBrandReact, color: "text-cyan-400" },
  { name: "Next.js", icon: IconBrandNextjs, color: "text-white" },
  { name: "TypeScript", icon: IconBrandTypescript, color: "text-blue-400" },
  { name: "JavaScript", icon: IconBrandJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: IconBrandTailwind, color: "text-teal-400" },
  { name: "Bootstrap", icon: IconBrandBootstrap, color: "text-blue-400" },
  { name: "Laravel", icon: IconBrandLaravel, color: "text-red-400" },
  { name: "HTML5", icon: IconBrandHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: IconBrandCss3, color: "text-blue-500" },
  { name: "Alpine.js", icon: IconBrandAlpineJs, color: "text-blue-500" },
  { name: "Git", icon: IconBrandGit, color: "text-orange-500" },
  { name: "Figma", icon: IconBrandFigma, color: "text-purple-400" },
];

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Aceternity UI Style Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
          Hakkımda
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 text-foreground">
          Beni Tanıyın
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Me - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group"
          >
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/20 via-cyan-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-tr-2xl blur-xl pointer-events-none" />

            <div className="relative h-full p-6 rounded-2xl bg-card border border-white/[0.1] hover:border-emerald-500/30 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <IconUser className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Kim Ben?
                  </h3>
                  <p className="text-xs text-emerald-400">
                    İş fırsatlarına açık
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ben Hasan Emir Çağlar, Pamukkale Üniversitesi Yönetim Bilişim
                  Sistemleri mezunuyum ve yaklaşık 3 yıllık web geliştirme
                  deneyimine sahibim. Frontend odaklı çalışmalar yürütmekle
                  birlikte backend alanında da deneyimim bulunmakta ve projeleri
                  baştan sona tasarlayıp geliştirebiliyorum.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  UI/UX tasarımcılarıyla yakın çalışarak Figma ve Photoshop
                  tasarımlarını pixel-perfect, responsive ve performans odaklı
                  koda dönüştürüyorum. Modern teknolojileri takip ediyor ve
                  sürekli kendimi geliştiriyorum.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  React.js, Next.js ve TypeScript gibi modern teknolojilerle
                  çalışıyorum. Clean code prensiplerine önem veriyor, kullanıcı
                  deneyimini ön planda tutarak projeler geliştiriyorum. Yeni
                  teknolojileri öğrenmeye ve kendimi sürekli geliştirmeye devam
                  ediyorum.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">3+</p>
                  <p className="text-xs text-muted-foreground">Yıl Deneyim</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">18+</p>
                  <p className="text-xs text-muted-foreground">Proje</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">9+</p>
                  <p className="text-xs text-muted-foreground">Teknoloji</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full p-5 rounded-2xl bg-card border border-white/[0.1] hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <IconBriefcase className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-foreground">Yeteneklerim</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors"
                  >
                    <skill.icon className={`h-4 w-4 ${skill.color}`} />
                    <span className="text-xs text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications Combined Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full p-5 rounded-2xl bg-card border border-white/[0.1] hover:border-purple-500/30 transition-all duration-300">
              {/* Education */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <IconSchool className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-foreground">Eğitim</h3>
                </div>
                <div className="flex items-start gap-2 ml-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <div>
                    <p className="text-sm text-foreground">
                      Pamukkale Üniversitesi
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Yönetim Bilişim Sistemleri
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <IconCertificate className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-foreground">Sertifikalar</h3>
                </div>
                <div className="space-y-2 ml-1">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      Sıfırdan İleri Düzey Web Geliştirme (Udemy)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      Patika.dev Web Geliştirme Kursu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
