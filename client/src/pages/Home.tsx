import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Certificates from '@/components/Certificates';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // تحميل مكتبة AOS للحركات
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.async = true;
    script.onload = () => {
      (window as any).AOS?.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
