"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full"
        prefetch={true}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-accent-border transition-all duration-500 h-full flex flex-col cursor-pointer",
            "bg-gradient-to-b from-midnight-light/80 to-midnight/80",
            "hover:border-primary/50 hover:shadow-[0_0_40px_rgba(98,82,215,0.15)]"
          )}
        >
          {/* Image Container */}
          <div className="relative h-56 md:h-64 overflow-hidden">
            {/* Placeholder gradient as fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-midnight-dark" />

            {/* Project Image */}
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white border-none px-3 py-1 font-medium">
                  Featured
                </Badge>
              </div>
            )}

            {/* Year Badge */}
            {project.year && (
              <div className="absolute top-4 right-4">
                <Badge
                  variant="outline"
                  className="border-white/30 text-white/80 bg-midnight/50 backdrop-blur-sm"
                >
                  {project.year}
                </Badge>
              </div>
            )}

            {/* Hover Overlay Content */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform duration-300",
                  isHovered ? "scale-100" : "scale-0"
                )}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Industry Tag */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-sm font-medium">
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300 min-h-[3.5rem] line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-silver text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-midnight border border-accent-border text-silver-light text-xs hover:border-primary/50 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge
                  variant="secondary"
                  className="bg-midnight border border-accent-border text-silver-light text-xs"
                >
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* Results Preview */}
            {project.results && project.results.length > 0 && (
              <div className="flex gap-4 pt-4 border-t border-accent-border mt-auto">
                {project.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="flex-1">
                    <p className="text-primary font-display font-bold text-lg">
                      {result.value}
                    </p>
                    <p className="text-silver-dark text-xs">{result.metric}</p>
                  </div>
                ))}
              </div>
            )}

            {/* View Details Link */}
            <div
              className={cn(
                "flex items-center gap-2 mt-4 text-primary font-medium text-sm transition-transform duration-200",
                isHovered ? "translate-x-1" : ""
              )}
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(98, 82, 215, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </Link>
    </motion.article>
  );
}
