"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ProjectsData } from "@/constants";
import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (reducedMotion || !ref.current) return;
    
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="projects" className="relative w-full bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-4 text-5xl font-black tracking-tight text-white md:text-7xl">
          Selected Work
        </h2>
        <p className="max-w-xl text-lg text-zinc-400">
          A collection of scalable systems, cinematic interfaces, and deep-tech integrations.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-4 pb-24">
        {ProjectsData.map((project: any, i: number) => (
          <div
            key={i}
            className="stack-card sticky top-0 flex min-h-dvh items-center justify-center pt-24"
          >
            {/* Double-Bezel Card */}
            <div className="relative flex w-full max-w-7xl flex-col md:flex-row overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl">
              <div className="relative w-full min-h-[300px] md:min-h-[500px] md:w-3/5 overflow-hidden rounded-[1.5rem] bg-[#050505] flex items-center justify-center">
                <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] z-10 pointer-events-none rounded-[1.5rem]" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="h-full w-full object-contain opacity-80 mix-blend-screen transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="flex w-full md:w-2/5 flex-col justify-center p-8 lg:p-12">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-zinc-400">
                  {project.description}
                </p>

                {project.collaborators && project.collaborators.length > 0 && (
                  <div className="mb-8 flex flex-col gap-2">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Collaborators</span>
                    <div className="flex -space-x-2">
                      {project.collaborators.map((collaborator: string, index: number) => {
                        const username = collaborator.split('/').pop();
                        return (
                          <a
                            key={index}
                            href={collaborator}
                            target="_blank"
                            rel="noreferrer"
                            className="relative inline-block size-8 overflow-hidden rounded-full border-2 border-[#0a0a0a] bg-[#111] transition-transform hover:z-10 hover:scale-110"
                            title={username}
                          >
                            <img src={`https://github.com/${username}.png?size=64`} alt={username || "collaborator"} className="h-full w-full object-cover" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center size-12 rounded-full bg-white text-black transition-all hover:scale-105 active:scale-95"
                    >
                      <ArrowUpRight weight="bold" className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center size-12 rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:bg-white/10 hover:text-white active:scale-95"
                    >
                      <GithubLogo weight="fill" className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
