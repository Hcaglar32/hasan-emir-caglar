import About from "@/components/About/About";
import Archive from "@/components/Arcihive/Archive";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Projects/Project";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Stats Section */}

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Project />

      <Archive />

      {/* Footer */}
      <Footer />
    </main>
  );
}
