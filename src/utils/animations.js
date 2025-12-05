import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const setupLenis = () => {
  if (typeof window === "undefined" || prefersReducedMotion()) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.5,
  });

  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);

  return () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    lenis.destroy();
  };
};

export const useSectionReveal = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = options.targets
        ? ref.current.querySelectorAll(options.targets)
        : [ref.current];

      targets.forEach((target, index) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.08 + (options.delay || 0),
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: options.start || "top 85%",
              once: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, options.targets, options.delay, options.start]);
};

export const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 25px 60px rgba(255, 64, 129, 0.15)",
  },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export const buttonMotion = {
  whileHover: {
    scale: 1.04,
    boxShadow: "0 15px 35px rgba(255, 64, 129, 0.3)",
  },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 300, damping: 18 },
};

export const listItemVariants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};


