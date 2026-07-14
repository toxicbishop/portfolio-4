"use client"

import { motion, useReducedMotion } from "motion/react"
import { fadeUp, sectionHeader, viewportOnce } from "@/animations/variants"
import { ExperienceData } from "@/constants"

export function ExperienceSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        <motion.div 
          className="lg:col-span-5"
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionHeader}
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:sticky lg:top-32">
            Experience.
          </h2>
        </motion.div>
        
        <div className="lg:col-span-7 flex flex-col gap-12">
          {ExperienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative flex w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2"
              initial={reducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <div className="relative flex flex-col overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-8 lg:p-10">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium tracking-wide uppercase text-xs">{exp.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase text-zinc-400 backdrop-blur-md whitespace-nowrap self-start sm:self-auto">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="flex flex-col gap-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-cyan-500 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium block mb-1">{highlight.title}</span>
                        <span className="text-zinc-400 text-sm leading-relaxed block">{highlight.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
