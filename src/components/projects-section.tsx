"use client"

import { motion, useReducedMotion } from "motion/react"
import { sectionHeader, viewportOnce } from "@/animations/variants"
import { ProjectsData } from "@/constants"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const reducedMotion = useReducedMotion()

  // Split projects into two columns for staggered layout
  const leftCol = ProjectsData.filter((_, i) => i % 2 === 0)
  const rightCol = ProjectsData.filter((_, i) => i % 2 !== 0)

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
      <motion.div
        className="mb-16 text-left"
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionHeader}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A selection of recent work, ranging from complex web applications to beautifully designed interfaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {leftCol.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index * 2} />
          ))}
        </div>

        {/* Right Column - Staggered via top margin on md screens */}
        <div className="flex flex-col gap-8 md:mt-24">
          {rightCol.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index * 2 + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
