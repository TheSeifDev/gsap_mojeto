"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { navLinks } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useGSAP(() => {
    const nav = navRef.current;

    // دخول الناف بار + اللوجو + اللينكات
    gsap.from(nav, { y: -50, autoAlpha: 0, duration: 0.6, ease: "power2.out" });
    gsap.from(logoRef.current, {
      scale: 0.9, autoAlpha: 0, duration: 0.8, ease: "elastic.out(1,0.6)", delay: 0.2,
    });
    gsap.from(linksRef.current, {
      y: -12, autoAlpha: 0, duration: 0.5, ease: "power2.out", stagger: 0.08, delay: 0.35,
    });

    // دوال التبديل بين شفاف ↔ زجاجي
    const showGlass = () =>
      gsap.to(nav, {
        backgroundColor: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
        duration: 0.25,
        ease: "power1.out",
        overwrite: "auto",
      });

    const hideGlass = () =>
      gsap.to(nav, {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        duration: 0.25,
        ease: "power1.out",
        overwrite: "auto",
      });

    // حالة مبدئية لو الصفحة متسحوبة أصلاً
    if (window.scrollY > 0) showGlass(); else hideGlass();

    // راقب سكرول الصفحة (مش العنصر الـ fixed)
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => (self.scroll() > 0 ? showGlass() : hideGlass()),
      // markers: true, // لو عايز تتأكد أثناء الديبج
    });
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 bg-transparent will-change-[backdrop-filter] transition-colors"
      style={{ WebkitBackdropFilter: "blur(0px)" }} // دعم Safari اختيارياً
    >
      <div className="flex justify-between items-center px-6 py-4">
        <a href="#home" ref={logoRef} className="flex items-center gap-2 select-none">
          <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
          <p className="font-semibold">Velvet Smoothie</p>
        </a>
        <ul className="flex gap-6">
          {navLinks.map((link, i) => (
            <li key={link.id} ref={(el) => (linksRef.current[i] = el)}>
              <a href={`#${link.id}`} className="hover:text-yellow-400 transition">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
