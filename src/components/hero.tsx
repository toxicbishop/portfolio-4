"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react"
import { fadeUp, scaleIn, staggerContainer, heroWord } from "@/animations/variants"

export function Hero() {
  const reducedMotion = useReducedMotion()
  const heroWords = ["Crafting", "Digital", "Realities"]

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col justify-center px-6 pt-24 pb-12"
    >
      <div className="flex w-full flex-col items-start text-left max-w-3xl z-10 relative">
        <motion.div
          className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={scaleIn}
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
            <div className="size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
          </div>
          <span>Available for work</span>
        </motion.div>

        <motion.h1
          className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          {heroWords.map((word) => (
            <motion.span
              className="inline-block pr-4"
              key={word}
              variants={heroWord}
              style={{ transformOrigin: "0% 100%" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mb-12 text-lg font-normal leading-relaxed text-zinc-400 md:text-xl max-w-xl"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.28 }}
        >
          I am Pranav Arun. A software engineer focused on building highly tactile, scalable systems and Awwwards-tier user interfaces that push the boundaries of the web.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          {/* Nested CTA Architecture */}
          <motion.a 
            href="#projects" 
            className="group flex items-center gap-4 rounded-full bg-white pl-6 pr-2 py-2 transition-transform hover:scale-[0.98] active:scale-[0.95]"
            variants={fadeUp}
          >
            <span className="text-sm font-semibold text-black uppercase tracking-wide">
              Selected Work
            </span>
            <div className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
              <ArrowUpRight weight="bold" className="size-4" />
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/5 pl-6 pr-2 py-2 backdrop-blur-md transition-transform hover:bg-white/10 hover:scale-[0.98] active:scale-[0.95]"
            variants={fadeUp}
          >
            <span className="text-sm font-medium text-white uppercase tracking-wide">
              GitHub
            </span>
            <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-transform group-hover:scale-105 group-hover:text-white group-hover:bg-white/20">
              <GithubLogo weight="fill" className="size-4" />
            </div>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Heavy Mesh Gradient Glows for Ethereal Glass */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/3 rounded-full bg-emerald-500/10 blur-[100px]" />
    </section>
  )
}
