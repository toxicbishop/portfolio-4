"use client"

import { motion, useReducedMotion } from "motion/react"
import { Lightning, Moon, Sun, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { fadeDown } from "@/animations/variants"
import { Socials } from "@/constants"

export function Header() {
  const reducedMotion = useReducedMotion()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-sm"
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={fadeDown}
    >
      <a href="#about" className="flex items-center gap-2 text-foreground">
        <motion.span
          animate={reducedMotion ? undefined : { rotate: [0, -7, 7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lightning weight="fill" className="size-8 text-cyan-500 dark:text-cyan-300" />
        </motion.span>
        <span className="text-xl font-bold uppercase tracking-wider drop-shadow-sm">
          Pranav Arun
        </span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        {["About", "Skills", "Projects"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-foreground transition-colors"
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { y: 0 }}
          >
            {item}
          </motion.a>
        ))}
        <div className="flex gap-4 items-center">
          {/* We'll replace the image socials with Phosphor icons since they're cleaner */}
          <motion.a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100 hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.12 }}
            whileTap={reducedMotion ? undefined : { scale: 0.94 }}
          >
            <GithubLogo weight="fill" className="size-6" />
          </motion.a>
          
          <motion.a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100 hover:text-foreground"
            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.12 }}
            whileTap={reducedMotion ? undefined : { scale: 0.94 }}
          >
            <LinkedinLogo weight="fill" className="size-6" />
          </motion.a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-full p-2 hover:bg-muted transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun weight="bold" className="size-5" />
              ) : (
                <Moon weight="bold" className="size-5" />
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
