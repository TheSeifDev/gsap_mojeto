"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { ArrowRight } from "lucide-react";


gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    const ViewSplit = new SplitText(".View", { type: "chars, words" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });


    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.from(ViewSplit.chars, {
      opacity: 0,
      yPercent: -100,
      duration: 0.6,
      ease: "expo.inout",
      stagger: 0.06,
      delay: 1,
    });

    gsap.from(".arrow-icon", {
      opacity: 0,
      yPercent: -100,
      duration: 1.6,
      ease: "expo.inOut",
      delay: 1.2,
    });


    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy noselect">
        <h1 className="title" >SMOOTIE</h1>
        <img src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Fresh. 100% Halal</p>
              <p className="subtitle">
                Taste the Purity <br /> of Nature
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every smoothie on our menu is a blend of fresh fruits, natural
                sweetness, and creative mixes — all halal, all refreshing, all for
                you.
              </p>
              <hr />
              <a href="#smoothies" className="View flex items-center gap-2">
                <span>
                  View Smoothies
                </span>
                <ArrowRight size={18} className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>``
      </section>
    </>
  )
}

export default Hero