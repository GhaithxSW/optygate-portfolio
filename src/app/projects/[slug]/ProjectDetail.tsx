"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Building2,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { GlowBorder } from "@/components/shared/GlowEffect";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Project } from "@/types/project";
import { getRelatedProjects } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const relatedProjects = getRelatedProjects(project.slug);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.div
            className="mb-6 md:mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={{ pathname: "/", hash: "projects" }}
              className="inline-flex items-center gap-2 text-silver hover:text-white transition-colors group text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="mb-8 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              {/* Industry Badge */}
              <Badge className="bg-primary/20 text-white border border-primary/30 px-2 md:px-3 py-1 text-xs md:text-sm">
                <Building2 className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                {project.industry}
              </Badge>

              {/* Year */}
              {project.year && (
                <Badge className="bg-midnight-light text-white border border-silver/30 px-2 md:px-3 py-1 text-xs md:text-sm">
                  <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                  {project.year}
                </Badge>
              )}

              {/* Featured Badge */}
              {project.featured && (
                <Badge className="bg-primary text-white border border-primary px-2 md:px-3 py-1 text-xs md:text-sm">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
              {project.title}
            </h1>

            <p className="text-silver text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative h-48 sm:h-64 md:h-80 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-midnight-dark" />
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />

            {/* Floating Stats on Image - Hidden on small mobile */}
            {project.results && project.results.length > 0 && (
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 hidden sm:flex flex-wrap gap-2 md:gap-4">
                {project.results.slice(0, 3).map((result, index) => (
                  <motion.div
                    key={result.metric}
                    className="glass px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-primary font-display font-bold text-base md:text-xl lg:text-2xl">
                      {result.value}
                    </p>
                    <p className="text-silver text-xs md:text-sm">{result.metric}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
            {/* Left Column - Challenge & Solution */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Challenge Section */}
              {project.challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white">
                      The Challenge
                    </h2>
                  </div>
                  <p className="text-silver text-sm md:text-base lg:text-lg leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white">
                      Our Solution
                    </h2>
                  </div>
                  <p className="text-silver text-sm md:text-base lg:text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white">
                      The Results
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {project.results.map((result, index) => (
                      <GlowBorder key={result.metric} className="h-full">
                        <motion.div
                          className="p-2 md:p-3 rounded-lg md:rounded-xl text-center h-full flex flex-col items-center justify-center min-h-[70px] md:min-h-[80px]"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <p className="font-display text-xs md:text-sm font-bold gradient-text-primary mb-0.5 md:mb-1">
                            {result.value}
                          </p>
                          <p className="text-silver text-[9px] md:text-[10px]">{result.metric}</p>
                        </motion.div>
                      </GlowBorder>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <motion.aside
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Technologies */}
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <h3 className="font-display text-base md:text-lg font-semibold text-white">
                    Technologies Used
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-midnight border border-accent-border text-silver-light hover:border-primary/50 transition-colors text-xs md:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 md:px-6 py-3 md:py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 glow-primary hover:glow-primary-strong text-sm md:text-base"
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Contact CTA */}
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <h3 className="font-display text-base md:text-lg font-semibold text-white mb-2">
                  Want a similar solution?
                </h3>
                <p className="text-silver text-xs md:text-sm mb-3 md:mb-4">
                  Let's discuss how we can help transform your business.
                </p>
                <a
                  href="mailto:info@optygate.com"
                  className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300 text-sm md:text-base"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.aside>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Separator className="mb-8 md:mb-16 bg-accent-border" />

              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
                Related Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                    index={index}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
