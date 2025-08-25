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
    // ✨ دخول الناف بار أول مرة (slide + fade)
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // ✨ اللوجو يدخل بلمعة صغيرة
    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.6)",
        delay: 0.5,
      }
    );

    // ✨ اللينكات تدخل واحدة ورا التانية
    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.8,
    });

    // ✨ تأثير الـ scroll (blur + خلفية + scale up بسيط)
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: navRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      backgroundColor: "#00000070",
      backdropFilter: "blur(12px)",
      scale: 1.02,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          ref={logoRef}
          className="flex items-center gap-2 select-none"
        >
          <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
          <p className="font-semibold ">Velvet Smoothie</p>
        </a>
        <ul className="flex gap-6">
          {navLinks.map((link, i) => (
            <li key={link.id} ref={(el) => (linksRef.current[i] = el)}>
              <a
                href={`#${link.id}`}
                className="hover:text-yellow-400 transition duration-300"
              >
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
