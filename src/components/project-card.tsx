"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { cardReveal } from "@/animations/variants"
import { ProjectsData } from "@/constants"

type Project = (typeof ProjectsData)[number]

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:shadow-xl"
      variants={cardReveal}
      custom={index}
      whileHover={reducedMotion ? undefined : { y: -8 }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.05),rgba(34,211,238,0.1),rgba(0,0,0,0.05))] bg-[length:220%_100%] dark:bg-[linear-gradient(110deg,rgba(255,255,255,0.05),rgba(34,211,238,0.16),rgba(255,255,255,0.05))]"
          animate={loaded || reducedMotion ? { opacity: 0 } : { opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 1.1, repeat: loaded ? 0 : Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            onLoad={() => {
              // Defer state update to avoid "update during render" warning from cached images
              setTimeout(() => setLoaded(true), 0)
            }}
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-card-foreground">{project.title}</h3>
        <p className="mb-6 line-clamp-3 text-sm text-muted-foreground flex-1">
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <a href={project.github} target="_blank" rel="noreferrer" className="w-fit flex-1 sm:flex-none">
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full"
            >
              <GithubLogo weight="bold" className="mr-1.5 size-4" />
              GitHub
            </Button>
          </a>
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer" className="w-fit flex-1 sm:flex-none">
              <Button
                variant="default"
                size="sm"
                className="w-full rounded-full bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-400 dark:text-zinc-950 dark:hover:bg-cyan-300"
              >
                <ArrowSquareOut weight="bold" className="mr-1.5 size-4" />
                Visit
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
