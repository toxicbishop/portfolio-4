"use client"

import { motion, useReducedMotion } from "motion/react"
import { Lightning, GithubLogo, LinkedinLogo, DiscordLogo, GitlabLogo, InstagramLogo, XLogo } from "@phosphor-icons/react"

export function Footer() {
  const reducedMotion = useReducedMotion()
  
  return (
    <footer className="mt-32 border-t border-border bg-background/40 py-12 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Lightning weight="fill" className="size-5 text-cyan-500/50 dark:text-cyan-300/50" />
          <span className="font-semibold uppercase tracking-wider text-foreground/70">
            Pranav Arun
          </span>
        </div>
        <p>© {new Date().getFullYear()} Pranav Arun. Built with Next.js & Tailwind CSS.</p>
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <GithubLogo weight="fill" className="size-5 opacity-70" />
            GitHub
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/pranav-arun/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <LinkedinLogo weight="fill" className="size-5 opacity-70" />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://discord.com/users/701732138269016064"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <DiscordLogo weight="fill" className="size-5 opacity-70" />
            Discord
          </motion.a>

          <motion.a
            href="https://gitlab.com/toxicbishop"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <GitlabLogo weight="fill" className="size-5 opacity-70" />
            GitLab
          </motion.a>

          <motion.a
            href="https://www.instagram.com/toxicbishop_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <InstagramLogo weight="fill" className="size-5 opacity-70" />
            Instagram
          </motion.a>

          <motion.a
            href="https://x.com/Pranav63076884"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            <XLogo weight="fill" className="size-5 opacity-70" />
            X
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
