"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconExternalLink,
  IconEye,
  IconX,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandBootstrap,
  IconBrandFigma,
  IconApi,
  IconDatabase,
  IconBrandNextjs,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// Teknoloji ikonları mapping
const techIcons: Record<string, React.ElementType> = {
  "React.js": IconBrandReact,
  "React": IconBrandReact,
  "Tailwind CSS": IconBrandTailwind,
  "Tailwind": IconBrandTailwind,
  "Laravel": IconBrandLaravel,
  "Laravel (Blade, Livewire)": IconBrandLaravel,
  "TypeScript": IconBrandTypescript,
  "JavaScript": IconBrandJavascript,
  "JS": IconBrandJavascript,
  "CSS": IconBrandCss3,
  "CSS3": IconBrandCss3,
  "HTML": IconBrandHtml5,
  "HTML5": IconBrandHtml5,
  "Bootstrap": IconBrandBootstrap,
  "Figma": IconBrandFigma,
  "Next.js": IconBrandNextjs,
  "API": IconApi,
  "Axios": IconApi,
  "Context": IconDatabase,
  "SaaS": IconDatabase,
  "GSAP": IconBrandJavascript,
  "Alpine.js": IconBrandJavascript,
  "glob.js": IconBrandJavascript,
  "Blade": IconBrandLaravel,
  "Livewire": IconBrandLaravel,
  "shadcn/ui": IconBrandReact,
  "Aceternity UI": IconBrandReact,
  "Owl": IconBrandJavascript,
  "Lazyload": IconApi,
  "Debounce": IconApi,
};

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  gitUrl?: string;
  previewUrl?: string;
  note?: string;
};

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Diyetin (SaaS)",
    description: "Tamamen benim fikrim olan bir SaaS. Diyetisyenlerin danışan, çalışan ve klinik takibini uçtan uca yöneteceği bir çözüm.",
    fullDescription: "Diyetin, diyetisyenlerin iş süreçlerini dijitalleştiren kapsamlı bir SaaS platformudur. Danışan yönetimi, randevu takibi, diyet planı oluşturma, çalışan yönetimi ve klinik operasyonlarını tek bir platformda birleştirir. Modern React arayüzü ve güçlü Laravel backend'i ile geliştirilmektedir. Tamamen benim fikrim ve tasarımımdır.",
    image: "/diyetin.jpg",
    images: ["/diyetin.jpg", "/diyetin-2.jpg", "/diyetin-3.jpg"],
    tags: ["React.js", "Tailwind CSS", "Laravel", "SaaS"],
    gitUrl: "https://github.com/Hcaglar32/myportfolionextjs",
    previewUrl:"#",
  },
  {
    id: 2,
    title: "Sarıkaya Gıda - Web Sitesi",
    description: "Figma tasarımını pixel-pixeline koda dökerek geliştirildi. Freelance olarak Piyetra firması ile çalışıldı.",
    fullDescription: "Sarıkaya Gıda için geliştirilen kurumsal web sitesi. Figma'da hazırlanan tasarım, piksel hassasiyetinde koda dönüştürüldü. GSAP ile etkileyici scroll animasyonları, Alpine.js ile interaktif bileşenler ve Laravel Blade/Livewire ile dinamik içerik yönetimi sağlandı. Piyetra firması ile freelance olarak tamamlandı.",
    image: "/sarikaya-2.png",
    images: ["/sarikaya.jpg", "/sarikaya-2.png","/sarikaya-tel.png"],
    tags: ["Tailwind CSS", "GSAP", "Laravel (Blade, Livewire)", "Alpine.js", "Figma"],
  },
  {
    id: 3,
    title: "Alper.by - Web Sitesi",
    description: "Tailwind, GSAP, Laravel (Blade, Livewire), glob.js ve Alpine.js ile geliştirildi. Piyetra ile freelance çalışıldı.",
    fullDescription: "Alper.by markası için modern ve şık bir web sitesi. Tailwind CSS ile responsive tasarım, GSAP ile akıcı animasyonlar, Laravel Blade ve Livewire ile server-side rendering ve dinamik bileşenler kullanıldı. Glob.js ile dosya yönetimi optimize edildi. Piyetra firması ile freelance olarak geliştirildi.",
    image: "/alperby.png",
    images: ["/alperby.png", "/alperby-2.png","/alper-tel.png"],
    tags: ["Tailwind CSS", "GSAP", "Laravel (Blade, Livewire)", "glob.js", "Alpine.js"],
    gitUrl: "https://github.com/Hcaglar32/myportfolionextjs",
  },
  {
    id: 4,
    title: "Taşın Group - Web Sitesi",
    description: "Figma tasarımının piksel hassasiyetinde kodlandığı proje. Piyetra ile freelance geliştirildi.",
    fullDescription: "Taşın Group için kurumsal web sitesi projesi. Figma tasarımı birebir koda aktarıldı. Tailwind CSS ile modern ve responsive arayüz, Alpine.js ile kullanıcı etkileşimleri, Laravel Blade/Livewire ile backend entegrasyonu ve GSAP ile scroll-triggered animasyonlar uygulandı.",
    image: "/tasingroup.com_hakkimizda.png",
    images: ["/tasin.png", "/tasingroup.com_hakkimizda.png"],
    tags: ["Tailwind CSS", "Alpine.js", "Laravel (Blade, Livewire)", "GSAP"],
  },
  {
    id: 5,
    title: "Alpset - Web Sitesi",
    description: "Onepage web sitesi. Figma tasarımının pixel-pixeline kodlanması. Piyetra ile freelance geliştirildi.",
    fullDescription: "Alpset için tek sayfalık (onepage) modern web sitesi. Figma tasarımı piksel hassasiyetinde kodlandı. Smooth scroll navigasyon, Tailwind CSS ile responsive tasarım ve Alpine.js ile interaktif elementler kullanıldı. Laravel Blade ve Livewire ile içerik yönetimi sağlandı.",
    image: "/alpset.png",
    images: ["/alpset.png", "/alpset-tel.png"],
    tags: ["Tailwind CSS", "Alpine.js", "Laravel", "Blade", "Livewire"],
  },
  {
    id: 6,
    title: "E-Ticaret - Case Projesi",
    description: "React.js ile geliştirildi. Laravel API'yi düzenleyip Axios, debounce ve lazyload optimizasyonlarıyla; context yapısı ile geliştirildi.",
    fullDescription: "Bir firma tarafından verilen case projesi. Mevcut Laravel API'yi düzenleyerek React.js frontend ile entegre ettim. Axios ile API istekleri, debounce ile arama optimizasyonu, lazyload ile performans iyileştirmesi ve Context API ile state yönetimi uygulandı. Temiz kod yapısı ve best practice'ler takip edildi.",
    image: "/case-ecommerce.png",
    images: ["/case-ecommerce.png"],
    tags: ["React.js", "Axios", "Context", "Lazyload", "Debounce"],
    note: "Case sonucu olumluydu fakat iş yeri ile anlaşamadım.",
  },
  {
    id: 7,
    title: "Sunfit Pilates - Web Sitesi",
    description: "Bucod firması bünyesinde geliştirildi. HTML, CSS, Bootstrap, JS ve Owl Carousel kullanıldı.",
    fullDescription: "Sunfit Pilates stüdyosu için kurumsal web sitesi. Bucod firmasında çalışırken geliştirdim. HTML5 semantik yapısı, CSS3 ile özel stiller, Bootstrap grid sistemi, vanilla JavaScript ile interaktivite ve Owl Carousel ile görsel slider'lar kullanıldı. Responsive ve cross-browser uyumlu.",
    image: "/sunfit.png",
    images: ["/sunfit.png"],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Owl"],
  },
  {
    id: 8,
    title: "Kvs Yapı - Web Sitesi",
    description: "Bucod firması bünyesinde geliştirildi. HTML, CSS, Bootstrap, JS ve Owl Carousel kullanıldı.",
    fullDescription: "Kvs Yapı inşaat firması için kurumsal web sitesi. Bucod firmasında çalışırken geliştirdim. Proje galerisi, hizmetler sayfası ve iletişim formu içeriyor. HTML5, CSS3, Bootstrap, JavaScript ve Owl Carousel teknolojileri kullanıldı.",
    image: "/kvs.png",
    images: ["/kvs.png"],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Owl"],
  },
];

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modal açıldığında slide'ı sıfırla
  const openModal = (project: ProjectItem) => {
    setModalProject(project);
    setCurrentSlide(0);
    setModalOpen(true);
  };

  // Slider navigasyonu
  const nextSlide = () => {
    if (modalProject?.images) {
      setCurrentSlide((prev) => (prev + 1) % modalProject.images!.length);
    }
  };

  const prevSlide = () => {
    if (modalProject?.images) {
      setCurrentSlide((prev) => (prev - 1 + modalProject.images!.length) % modalProject.images!.length);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Çift indexliler soldan, tek indexliler sağdan
        const isEven = index % 2 === 0;
        const xOffset = isEven ? -100 : 100;
        const rotation = isEven ? -15 : 15;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: xOffset,
            y: 100, // Aşağıdan yukarı doğru
            rotation: rotation, // Hafif eğiklik (puzzle etkisi)
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // Daha geç başlasın (kart ekranın %25'ine geldiğinde)
              end: "top 20%",   // Daha uzun sürsün (kart ekranın üst %25'ine gelene kadar)
              scrub: 2,         // Daha yumuşak geçiş
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="project" className="py-20 relative overflow-hidden">
      {/* Aceternity UI Style Background */}
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
            <linearGradient id="projectGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="projectGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
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
            stroke="url(#projectGrad1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="100%"
            y1="30%"
            x2="0%"
            y2="70%"
            stroke="url(#projectGrad2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Floating Particles - CSS only for better performance */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 25}%`,
                top: `${25 + (i % 2) * 35}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/20 rounded-br-3xl" />
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
          Portföy
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mt-2 text-foreground">
          Projelerim
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Geliştirdiğim projelerden bazıları. Her biri farklı teknolojiler ve çözümler içeriyor. Yer aldığım bütün projeleri paylaşamıyorum. Benim olan projeler ve paylaşabildiklerim aşağıda.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div ref={containerRef} className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative transform-gpu" // GPU hızlandırma için
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-card border border-white/[0.1] group-hover:border-emerald-500/50 transition-all duration-300 h-full">
                {/* Project Image */}
                <div 
                  className="h-72 w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${getAssetPath(project.image)})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Overlay Links - 3 İkon (Her zaman görünür, pasif/aktif durumu) */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                    {/* GitHub */}
                    {project.gitUrl ? (
                      <Link
                        href={project.gitUrl}
                        target="_blank"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group/icon"
                        title="GitHub"
                      >
                        <IconBrandGithub className="h-5 w-5 text-white group-hover/icon:text-emerald-400 transition-colors" />
                      </Link>
                    ) : (
                      <div
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 cursor-not-allowed"
                        title="GitHub mevcut değil"
                      >
                        <IconBrandGithub className="h-5 w-5 text-white/30" />
                      </div>
                    )}
                    {/* Canlı Site */}
                    {project.previewUrl ? (
                      <Link
                        href={project.previewUrl}
                        target="_blank"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group/icon"
                        title="Canlı Site"
                      >
                        <IconExternalLink className="h-5 w-5 text-white group-hover/icon:text-cyan-400 transition-colors" />
                      </Link>
                    ) : (
                      <div
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 cursor-not-allowed"
                        title="Canlı site mevcut değil"
                      >
                        <IconExternalLink className="h-5 w-5 text-white/30" />
                      </div>
                    )}
                    {/* Proje Önizleme Modal */}
                    <button
                      onClick={() => openModal(project)}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group/icon"
                      title="Proje Detayları"
                    >
                      <IconEye className="h-5 w-5 text-white group-hover/icon:text-purple-400 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/Hcaglar32"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all text-foreground font-medium"
          >
            <IconBrandGithub className="h-5 w-5" />
            Tüm Projeleri Gör
          </Link>
        </motion.div>
      </div>
      {/* Proje Detay Modal */}
      <AnimatePresence>
        {modalOpen && modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-4 overflow-y-auto"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-5xl my-4 md:my-8 rounded-2xl md:rounded-3xl bg-card border border-white/10 overflow-hidden relative max-h-[95vh] md:max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                <IconX className="h-5 w-5 text-white" />
              </button>

              {/* Image Slider */}
              <div className="relative w-full min-h-[300px] md:min-h-[500px] bg-black/50 flex-shrink-0">
                {/* Current Slide */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${getAssetPath((modalProject.images || [modalProject.image])[currentSlide])})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {(modalProject.images?.length || 1) > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                    >
                      <IconChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-emerald-400 transition-colors" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                    >
                      <IconChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-emerald-400 transition-colors" />
                    </button>
                  </>
                )}

                {/* Slide Indicators */}
                {(modalProject.images?.length || 1) > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {modalProject.images?.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                          idx === currentSlide 
                            ? "bg-emerald-400 w-6 md:w-8" 
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Slide Counter */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                  <span className="text-white text-xs md:text-sm">
                    {currentSlide + 1} / {modalProject.images?.length || 1}
                  </span>
                </div>
              </div>

              {/* İçerik - Scrollable */}
              <div className="p-4 md:p-8 overflow-y-auto flex-1">
                {/* Başlık ve Linkler */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                  <h3 className="text-xl md:text-3xl font-bold text-foreground">
                    {modalProject.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {modalProject.gitUrl && (
                      <Link
                        href={modalProject.gitUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-xs md:text-sm"
                      >
                        <IconBrandGithub className="h-4 w-4" />
                        GitHub
                      </Link>
                    )}
                    {modalProject.previewUrl && (
                      <Link
                        href={modalProject.previewUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors text-xs md:text-sm"
                      >
                        <IconExternalLink className="h-4 w-4" />
                        Canlı Site
                      </Link>
                    )}
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {modalProject.fullDescription || modalProject.description}
                </p>

                {/* Not (varsa) */}
                {modalProject.note && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 md:p-4 mb-4 md:mb-6">
                    <p className="text-amber-300 text-xs md:text-sm flex items-start gap-2">
                      <span className="text-amber-400 font-medium">Not:</span>
                      {modalProject.note}
                    </p>
                  </div>
                )}

                {/* Teknolojiler - İkonlu */}
                <div>
                  <h4 className="text-xs md:text-sm font-medium text-foreground mb-2 md:mb-3">Kullanılan Teknolojiler</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {modalProject.tags.map((tag) => {
                      const IconComponent = techIcons[tag];
                      return (
                        <div
                          key={tag}
                          className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                        >
                          {IconComponent && (
                            <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                          )}
                          <span className="text-xs md:text-sm text-foreground">{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
