"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";


gsap.registerPlugin(SplitText);

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 })

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


    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title mt-10 max-lg:mt-26">
          SMOOTIE
        </h1>

        <img src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <img src="/images/arrow.png" alt="arrow" className="arrow" />
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
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  )
}

export default Hero