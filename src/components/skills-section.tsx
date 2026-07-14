"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { cardReveal, sectionHeader, staggerContainer, viewportOnce } from "@/animations/variants"
import { Frontend_skill, Backend_skill, DevTools } from "@/constants"

type Skill = {
  skill_name: string
  Image: string
  width: number
  height: number
}

function SkillItem({ skill, index }: { skill: Skill; index: number }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="group relative flex size-16 sm:size-20 items-center justify-center rounded-xl border border-border bg-card p-3 shadow-sm transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/5 dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10"
      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: reducedMotion ? 0 : index * 0.035 }}
      whileHover={reducedMotion ? undefined : { y: -4, scale: 1.05 }}
      whileTap={reducedMotion ? undefined : { scale: 0.95 }}
      tabIndex={0}
    >
      <Image
        src={skill.Image}
        alt={skill.skill_name}
        width={skill.width}
        height={skill.height}
        className="object-contain drop-shadow-sm transition-transform group-hover:drop-shadow-md"
        style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
      />
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 z-50">
        {skill.skill_name}
      </span>
    </motion.div>
  )
}

export function SkillsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
      <motion.div
        className="mb-16 text-left"
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionHeader}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Core Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A comprehensive toolkit for building modern, scalable digital experiences.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {/* Frontend - Large Block (spans 2 cols on lg) */}
        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl border border-border bg-muted/20 p-8 backdrop-blur-sm"
          variants={cardReveal}
        >
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
            Frontend & UI
          </h3>
          <div className="flex flex-wrap gap-4">
            {Frontend_skill.map((skill, index) => (
              <SkillItem key={skill.skill_name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Backend - Medium Block */}
        <motion.div
          className="col-span-1 rounded-2xl border border-border bg-muted/20 p-8 backdrop-blur-sm"
          variants={cardReveal}
        >
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
            Backend & Systems
          </h3>
          <div className="flex flex-wrap gap-4">
            {Backend_skill.map((skill, index) => (
              <SkillItem key={skill.skill_name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Tools - Wide Block (spans full width on bottom) */}
        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl border border-border bg-muted/20 p-8 backdrop-blur-sm"
          variants={cardReveal}
        >
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
            Development Tools
          </h3>
          <div className="flex flex-wrap gap-4">
            {DevTools.map((skill, index) => (
              <SkillItem key={skill.skill_name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
