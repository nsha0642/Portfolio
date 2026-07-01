import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profilePic from "../../assets/profilePic.png";
import "./ScrollPortrait.css";

const ScrollPortrait = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.9], [120, 0, 90, -40]);
  const x = useTransform(scrollYProgress, [0, 0.18, 0.55, 0.9], [180, 0, -24, 160]);
  const rotate = useTransform(scrollYProgress, [0, 0.45, 0.9], [8, -4, 7]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.65, 0.9], [0.7, 1, 0.82, 0.65]);
  const opacity = useTransform(scrollYProgress, [0.08, 0.16, 0.82, 0.94], [0, 1, 1, 0]);

  return (
    <motion.aside className="scroll-portrait" style={{ x, y, rotate, scale, opacity }} aria-hidden="true">
      <div className="scroll-portrait-orbit" />
      <img src={profilePic} alt="" />
      <span>SCROLLING THROUGH THE STORY</span>
    </motion.aside>
  );
};

export default ScrollPortrait;
