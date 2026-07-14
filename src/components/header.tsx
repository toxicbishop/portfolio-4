"use client"

import { motion, useReducedMotion } from "motion/react"
import { Lightning, GithubLogo, LinkedinLogo, DiscordLogo, GitlabLogo, InstagramLogo, XLogo } from "@phosphor-icons/react"
import { fadeDown } from "@/animations/variants"

export function Header() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={fadeDown}
    >
      <a href="#home" className="flex items-center gap-2 text-foreground group">
        <motion.span
          className="bg-black/40 p-1.5 rounded-full border border-white/10"
          animate={reducedMotion ? undefined : { rotate: [0, -7, 7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lightning weight="fill" className="size-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </motion.span>
        <span className="text-sm font-bold uppercase tracking-widest text-white">
          PA.
        </span>
      </a>
      <nav className="hidden items-center gap-6 text-[13px] font-medium text-zinc-400 uppercase tracking-widest md:flex">
        {["About", "Skills", "Experience", "Projects"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
            whileHover={reducedMotion ? undefined : { y: -1 }}
            whileTap={reducedMotion ? undefined : { y: 0 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <motion.a
          href="https://github.com/toxicbishop"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <GithubLogo weight="fill" className="size-4" />
        </motion.a>
        
        <motion.a
          href="https://www.linkedin.com/in/pranav-arun/"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <LinkedinLogo weight="fill" className="size-4" />
        </motion.a>

        <motion.a
          href="https://discord.com/users/701732138269016064"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <DiscordLogo weight="fill" className="size-4" />
        </motion.a>
        <motion.a
          href="https://gitlab.com/toxicbishop"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <GitlabLogo weight="fill" className="size-4" />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/toxicbishop_"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <InstagramLogo weight="fill" className="size-4" />
        </motion.a>

        <motion.a
          href="https://x.com/Pranav63076884"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        >
          <XLogo weight="fill" className="size-4" />
        </motion.a>
      </div>
    </motion.header>
  )
}
