"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IconCalendar, IconMapPin, IconBriefcase, IconSparkles, IconMail, IconBrandLinkedin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Web Developer",
    company: "405Found",
    location: "Türkiye",
    period: "2025",
    description: [
      "Modern web siteleri ve kurumsal web siteleri geliştirdim",
      "Wordpress ve elementor ile  projeler ürettim",
      "Müşteri gereksinimlerine uygun özelleştirilmiş çözümler sundum",
      "Müşteri revizlerini dinleyip revizeleri uygun hale getirip projeyi tamamladım",
    ],
    technologies: ["Elementor", "Woocomerce", "Javascript", "CSS"],
  },
  {
    title: "Web Developer",
    company: "DPB Interiors",
    location: "Türkiye",
    period: "2024",
    description: [
      "Şirketin kurumsal web sitesini tasarımdan koda döktüm ve geliştirdim",
      "Şirketin web sitesinin yönetim panelini geliştirdim ve panele google analytics entegrasyonu yaptım",
      "Responsive ve modern UI/UX'e uygun tasarımları uyguladım",
      "SEO optimizasyonu ve performans iyileştirmeleri yaptım",
      "Web sitelerinin yayına alma süreçlerini yönettim",
    ],
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "CSS","Bootstrap"],
  },
  {
    title: "Freelance Fullstack Developer",
    company: "Piyetra",
    location: "Türkiye",
    period: "2023 - 2024",
    description: [
      "Firmanın tasarladığı figma tasarımlarını koda döktüm",
      "Frontend ve backend entegrasyonları gerçekleştirdim",
      "Revize dosyalarını takip edip , gelen revizeleri tamamladım.",
      "Tasrımda eksik gördüğüm noktaları bildirip kodlamaya uygun hale getirdim..",
    ],
    technologies: ["React.js", "Laravel", "Mysql", "Tailwind CSS","Bootstrap","Alpine.js","Javascript","CSS"],
  },
  {
    title: "Jr. Frontend Developer",
    company: "Bucod",
    location: "Türkiye",
    period: "2023",
    description: [
      "UI/UX tasarımlarını pixel-perfect koda dönüştürdüm",
      "React.js ve modern CSS framework'leri ile projeler geliştirdim",
      "Seçilen temaları müşterii isteklerine uygun hale getirip kodları düzenledim.",
    ],
    technologies: ["React.js", "CSS", "JavaScript", "Git","Tailwind","Bootstrap"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Cards reveal animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" id="experience">
      {/* Aceternity UI Style Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-24 h-24 border-l-2 border-t-2 border-emerald-500/10 rounded-tl-3xl" />
        <div className="absolute bottom-1/4 right-0 w-24 h-24 border-r-2 border-b-2 border-cyan-500/10 rounded-br-3xl" />
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
          Kariyer
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 text-foreground">
          İş Deneyimi
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Single Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10">
          <div 
            ref={timelineRef}
            className="w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500"
            style={{ height: "0%" }}
          />
        </div>

        {/* Your Company CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative pl-20 pb-8"
        >
          {/* Timeline Dot - Special */}
          <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 border-4 border-background z-10">
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/20 via-cyan-500/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                <IconSparkles className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Bir Sonraki Adım?
                </h3>
                <p className="text-emerald-400 font-medium text-sm">Sizin Şirketiniz Olabilir!</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Yeni fırsatlara açığım ve ekibinizin bir parçası olmaktan mutluluk duyarım. 
              Modern web teknolojileri konusundaki deneyimimi sizin projelerinize taşımak istiyorum. 
              Hadi birlikte harika işler çıkaralım!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:hasan.49.5012@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <IconMail className="h-4 w-4" />
                hasan.49.5012@gmail.com
              </Link>
              <Link
                href="tel:+905051330627"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-foreground text-sm font-medium transition-all"
              >
                <IconPhone className="h-4 w-4 text-emerald-400" />
                Telefon
              </Link>
              <Link
                href="https://linkedin.com/in/hasan-emir-caglar"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-foreground text-sm font-medium transition-all"
              >
                <IconBrandLinkedin className="h-4 w-4 text-cyan-400" />
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>

        {experiences.map((exp, index) => (
          <div 
            key={index} 
            ref={(el) => { cardsRef.current[index] = el; }}
            className="relative pl-20 pb-8"
          >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-background z-10">
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </div>

              <div className="p-6 rounded-2xl bg-card border border-white/[0.1] hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none" />
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <IconBriefcase className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <IconCalendar className="h-4 w-4 text-emerald-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMapPin className="h-4 w-4 text-cyan-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
