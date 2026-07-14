"use client"

import { motion, useReducedMotion } from "motion/react"
import { fadeUp, sectionHeader, viewportOnce } from "@/animations/variants"

export function AboutSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        <motion.div 
          className="lg:col-span-5"
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionHeader}
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:sticky lg:top-32">
            The Origin.
          </h2>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-8 text-lg font-normal leading-[1.8] text-zinc-400 max-w-[60ch]"
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="text-xl text-zinc-300">
            Hello! I&apos;m a passionate developer currently pursuing my B.E. in Computer Science & Business Systems at KSSEM (K.S. School of Engineering and Management), Bengaluru.
          </p>
          
          <p>
            My journey in tech is driven by an insatiable curiosity for how things work under the hood. I built <span className="text-white font-medium">DSA Study Hub</span>{" "}to bridge the gap between complex algorithms and intuitive learning. Whether it&apos;s pathfinding visualizations or dynamic programming breakdowns, I believe technology should make learning accessible and engaging for everyone.
          </p>
          
          <p>
            Dedicated to bridging the gap between theoretical computer science and practical software implementation. My focus lies in developing efficient algorithms and making complex data structures intuitive for the next generation of engineers.
          </p>
          
          <p>
            Currently pursuing specialized research in Computer Science and Business Systems, focusing on the intersection of algorithmic efficiency and enterprise scalability.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
