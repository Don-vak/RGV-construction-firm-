"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play, Building2, HardHat, Wrench, Mouse, ArrowUpRight, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#161514] text-white selection:bg-[#F5921E] selection:text-[#161514]">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 relative z-50">
        <div className="flex items-center">
          <div className="px-4 py-4 flex items-center">
            <Image src="/RGVlogo_v3.png" alt="RGV Workers Logo" width={180} height={60} className="object-contain" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-gray-300">
          <Link href="#home" className="text-white hover:text-[#F5921E] transition-colors">HOME</Link>
          <Link href="#about" className="hover:text-[#F5921E] transition-colors">ABOUT</Link>
          <Link href="#services" className="hover:text-[#F5921E] transition-colors">SERVICES</Link>
          <Link href="#projects" className="hover:text-[#F5921E] transition-colors">PROJECTS</Link>
          <Link href="#contact" className="hover:text-[#F5921E] transition-colors">CONTACT</Link>
        </div>

        <div className="flex items-center h-full">
          <Link href="#contact" className="hidden md:flex items-center gap-2 bg-[#F5921E] text-[#161514] px-8 py-6 font-bold text-sm hover:bg-[#d97b0c] transition-colors h-full">
            FREE ESTIMATE <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-6 text-white hover:text-[#F5921E] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[92px] bg-[#161514] z-40 md:hidden overflow-y-auto border-t border-white/10">
          <div className="flex flex-col p-6 gap-6 text-lg font-bold tracking-wider">
            <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F5921E] transition-colors py-2 border-b border-white/10">HOME</Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F5921E] transition-colors py-2 border-b border-white/10">ABOUT</Link>
            <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F5921E] transition-colors py-2 border-b border-white/10">SERVICES</Link>
            <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F5921E] transition-colors py-2 border-b border-white/10">PROJECTS</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F5921E] transition-colors py-2 border-b border-white/10">CONTACT</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 bg-[#F5921E] text-[#161514] px-8 py-4 text-sm hover:bg-[#d97b0c] transition-colors text-center">
              FREE ESTIMATE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Typography */}
          <div className="relative z-20">
            <div className="flex items-center gap-4 text-[#F5921E] font-bold tracking-widest text-sm mb-12">
              <div className="w-12 h-[2px] bg-[#F5921E]"></div>
              EST. 2015
            </div>

            <h1 className="font-display font-black leading-none tracking-tighter">
              <div className="relative inline-block mb-4 sm:mb-8">
                <span className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] text-white block">WE</span>
                {/* Orange Circle Badge */}
                <div className="absolute -top-4 -right-12 sm:-top-8 sm:-right-24 bg-[#F5921E] rounded-full w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-[#161514] font-bold transform rotate-12 shadow-2xl">
                  <span className="text-xl sm:text-3xl leading-none">11+</span>
                  <span className="text-[10px] sm:text-xs">YEARS</span>
                </div>
              </div>
              <div className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] text-[#F5921E] block mb-4 sm:mb-8 relative z-10">BUILD</div>
              <div className="inline-block bg-[#F5921E] text-[#161514] px-4 sm:px-6 pt-4 pb-2 sm:pt-6 sm:pb-3 relative z-20">
                <span className="text-[80px] sm:text-[110px] md:text-[140px] lg:text-[160px] block leading-none">DREAMS</span>
              </div>
            </h1>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Background Text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[150px] text-white/5 rotate-90 origin-right whitespace-nowrap pointer-events-none">
              EXCELLENCE
            </div>

            {/* Main Image */}
            <div className="absolute top-0 right-12 w-[350px] h-[500px] z-10 border border-white/10 overflow-hidden group">
              <Image
                src="/RGV_1.png"
                alt="Construction Building"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-12 left-12 w-[250px] h-[350px] z-20 border-4 border-[#161514] overflow-hidden group">
              <Image
                src="/RVG_2.png"
                alt="Welder working on structural steel at a construction site"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Play Button */}
            <button className="absolute top-1/2 left-1/4 z-30 w-20 h-20 bg-[#F5921E] rounded-full flex items-center justify-center text-[#161514] hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-8 h-8 fill-[#161514] ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats & Intro Section */}
      <section id="about" className="border-t border-white/10 px-4 md:px-12 lg:px-24 py-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center lg:items-start">
          {/* Left Intro text */}
          <div className="max-w-md w-full">
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              From full new builds to kitchen and bath remodels, RGV Remodeling & Construction brings the experience, skill and craftsmanship to turn your space into the place you've always pictured.
            </p>
            <div className="flex items-center gap-6 group cursor-pointer w-fit">
              <div className="w-14 h-14 bg-[#F5921E] rounded-full flex items-center justify-center text-[#161514] group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg tracking-wider">FREE ESTIMATE</h4>
                <p className="text-gray-500 text-sm">Let's talk about your project</p>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
            {[
              { num: 'FREE', title: 'PROJECT\nESTIMATES', sub: 'No Obligation' },
              { num: 'RGV', title: 'LOCAL TO\nMCALLEN', sub: 'Serving the Valley' },
              { num: 'EN/ES', title: 'BILINGUAL\nTEAM', sub: 'English & Spanish' },
              { num: '100%', title: 'QUALITY\nASSURANCE', sub: 'Built to Last' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#1a1918] border-t-2 border-[#F5921E] p-6 flex flex-col justify-center hover:bg-[#201e1d] transition-colors">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#F5921E] mb-4">{stat.num}</h2>
                <h3 className="font-bold text-sm tracking-wider whitespace-pre-line mb-2 leading-tight">{stat.title}</h3>
                <p className="text-gray-600 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Down indicator */}
        <div className="flex flex-col items-center justify-center mt-24 gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[10px] tracking-[0.2em] font-bold">SCROLL DOWN</span>
          <Mouse className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Services Section (Warm Paper Background) */}
      <section id="services" className="bg-[#F6F2EC] text-[#161514] py-32 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background text decoration */}
        <div className="absolute top-20 left-0 w-full text-center overflow-hidden pointer-events-none select-none">
          <h2 className="text-[150px] sm:text-[250px] lg:text-[350px] font-display font-black text-white/50 leading-none tracking-tighter">SERVICES</h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col mb-16">
            <div className="flex items-center gap-4 text-[#F5921E] font-bold tracking-widest text-sm mb-6">
              <span className="text-[#F5921E] font-display font-black">//</span> OUR SERVICES
            </div>
            <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none max-w-2xl">
              EVERYTHING YOUR PROJECT NEEDS
            </h2>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Card 1 */}
            <div className="bg-white p-12 group hover:bg-gray-50 transition-colors relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="absolute top-4 right-8 text-8xl font-display font-black text-gray-100 group-hover:text-[#F6F2EC] transition-colors select-none">01</div>
              <Building2 className="w-10 h-10 mb-16 relative z-10 stroke-1" />
              <div className="mt-auto relative z-10">
                <h3 className="text-2xl font-black font-display mb-4 pr-8 uppercase">NEW CONSTRUCTION</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed max-w-[250px]">
                  Residential and commercial builds from the ground up. We bring your vision to life with precision and expertise.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-2 font-bold text-sm tracking-wider group-hover:text-[#F5921E] transition-colors">
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#161514] text-white p-12 group relative overflow-hidden flex flex-col min-h-[400px]">
               <div className="absolute top-4 right-8 text-8xl font-display font-black text-white/5 group-hover:text-[#F5921E]/10 transition-colors select-none">02</div>
              <HardHat className="w-10 h-10 mb-16 relative z-10 stroke-1" />
              <div className="mt-auto relative z-10">
                <h3 className="text-2xl font-black font-display mb-4 pr-8 uppercase">RENOVATION & REMODELING</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-[250px]">
                  Full room remodels, kitchens, and baths. Revitalize existing structures with innovative designs.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 font-bold text-sm tracking-wider text-[#F5921E] hover:text-white transition-colors">
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5921E] text-[#161514] p-12 group relative overflow-hidden flex flex-col min-h-[400px]">
               <div className="absolute top-4 right-8 text-8xl font-display font-black text-[#161514]/5 group-hover:text-white/20 transition-colors select-none">03</div>
              <Wrench className="w-10 h-10 mb-16 relative z-10 stroke-1" />
              <div className="mt-auto relative z-10">
                <h3 className="text-2xl font-black font-display mb-4 pr-8 uppercase">EXTERIORS & FINISHES</h3>
                <p className="text-[#161514]/80 mb-8 text-sm leading-relaxed max-w-[250px]">
                  Concrete, roofing, interior & exterior paint, flooring, custom cabinets and drywall finishing.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 font-bold text-sm tracking-wider hover:text-white transition-colors">
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#1a1918] py-32 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 text-[#F5921E] font-bold tracking-widest text-sm mb-6">
                <span className="text-[#F5921E] font-display font-black">//</span> SEE THE WORK
              </div>
              <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-none">
                OUR LATEST<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>PROJECTS</span>
              </h2>
            </div>
            <Link href="#contact" className="flex items-center gap-2 border-b-2 border-[#F5921E] pb-2 font-bold text-sm hover:text-[#F5921E] transition-colors">
              VIEW ALL PROJECTS <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'MODERN OFFICE COMPLEX', cat: 'COMMERCIAL', img: '/RVG_3.png', alt: 'Modern office complex commercial construction project in McAllen TX' },
              { title: 'LUXURY RESIDENCE', cat: 'RESIDENTIAL', img: '/RVG_4.png', alt: 'Luxury residential construction project in Rio Grande Valley' },
              { title: 'KITCHEN REMODEL', cat: 'RENOVATION', img: '/RGV_1.png', alt: 'Kitchen remodel and renovation project by RGV Workers' },
              { title: 'RETAIL SPACE', cat: 'COMMERCIAL', img: '/RVG_2.png', alt: 'Retail space commercial construction project in McAllen TX' }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[400px] mb-6 overflow-hidden bg-[#161514]">
                  <Image
                    src={proj.img}
                    alt={proj.alt}
                    fill
                    loading="lazy"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 bg-[#F5921E] text-[#161514] px-4 py-2 text-xs font-bold tracking-widest">
                    {proj.cat}
                  </div>
                  <div className="absolute inset-0 bg-[#F5921E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <ArrowUpRight className="w-8 h-8 text-[#161514]" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-black uppercase mb-2 group-hover:text-[#F5921E] transition-colors">{proj.title}</h3>
                <p className="text-gray-500 text-sm font-semibold tracking-wider">MCALLEN, TX</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Contact Info */}
          <div className="bg-[#F5921E] text-[#161514] p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-none mb-12">
              LET'S BUILD<br />IT.
            </h2>
            <p className="font-semibold text-lg max-w-md mb-12">
              Tell us about your project and we'll get back to you fast with a free, no-obligation estimate.
            </p>
            
            <div className="space-y-8 font-semibold">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm tracking-widest mb-1 opacity-70">AREA</p>
                  <p className="text-lg">McAllen & the Rio Grande Valley, TX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm tracking-widest mb-1 opacity-70">PHONE</p>
                  <p className="text-lg">(956) 321-3279</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-sm tracking-widest mb-1 opacity-70">EMAIL</p>
                  <p className="text-lg">cesar.ledesma1974@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#161514] p-12 md:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-[#F5921E] font-bold tracking-widest text-sm mb-8">
              <span className="text-[#F5921E] font-display font-black">//</span> GET A FREE QUOTE
            </div>
            
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                data.append('_to', 'cesar.ledesma1974@gmail.com');
                data.append('_subject', 'New RGV Workers Quote Request');
                try {
                  const res = await fetch('https://formspree.io/f/xdovwqvz', {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' },
                  });
                  if (res.ok) {
                    form.reset();
                    alert('Thanks! We will be in touch soon.');
                  } else {
                    alert('Something went wrong. Please email us directly at cesar.ledesma1974@gmail.com.');
                  }
                } catch {
                  alert('Something went wrong. Please email us directly at cesar.ledesma1974@gmail.com.');
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-xs font-bold tracking-widest text-gray-400">FIRST NAME</label>
                  <input id="first_name" name="first_name" type="text" required className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#F5921E] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="text-xs font-bold tracking-widest text-gray-400">LAST NAME</label>
                  <input id="last_name" name="last_name" type="text" required className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#F5921E] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-400">EMAIL ADDRESS</label>
                  <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#F5921E] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project_type" className="text-xs font-bold tracking-widest text-gray-400">PROJECT TYPE</label>
                  <select id="project_type" name="project_type" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#F5921E] transition-colors text-white appearance-none">
                    <option value="remodel" className="bg-[#161514]">Remodel</option>
                    <option value="new_build" className="bg-[#161514]">New Build</option>
                    <option value="roofing" className="bg-[#161514]">Roofing</option>
                    <option value="flooring" className="bg-[#161514]">Flooring</option>
                    <option value="other" className="bg-[#161514]">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-bold tracking-widest text-gray-400">PROJECT DETAILS</label>
                <textarea id="details" name="details" rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#F5921E] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="bg-white text-[#161514] px-8 py-4 font-bold text-sm tracking-widest hover:bg-[#F5921E] transition-colors mt-8 w-full md:w-auto">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161514] py-12 px-4 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <Image src="/RGVlogo_v3.png" alt="RGV Workers Logo" width={150} height={50} className="object-contain" />
          </div>

          <div className="flex gap-6 text-sm font-semibold tracking-wider text-gray-400 flex-wrap justify-center">
            <Link href="#home" className="hover:text-[#F5921E] transition-colors">HOME</Link>
            <Link href="#about" className="hover:text-[#F5921E] transition-colors">ABOUT</Link>
            <Link href="#services" className="hover:text-[#F5921E] transition-colors">SERVICES</Link>
            <Link href="#projects" className="hover:text-[#F5921E] transition-colors">PROJECTS</Link>
            <Link href="#contact" className="hover:text-[#F5921E] transition-colors">CONTACT</Link>
          </div>

          <div className="flex gap-4">
            <Link href="https://web.facebook.com/RGVWORKERS/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1a1918] rounded-full flex items-center justify-center hover:bg-[#F5921E] hover:text-[#161514] transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1a1918] rounded-full flex items-center justify-center hover:bg-[#F5921E] hover:text-[#161514] transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1a1918] rounded-full flex items-center justify-center hover:bg-[#F5921E] hover:text-[#161514] transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between text-gray-500 text-xs font-semibold tracking-wider">
          <p>&copy; {new Date().getFullYear()} RGV REMODELING & CONSTRUCTION. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
