"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects, industries } from "@/data/projects";
import { cn } from "@/lib/utils";

const PROJECTS_PER_PAGE = 6;

export function ProjectsGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    selectedIndustry === "All"
      ? projects
      : projects.filter((project) => project.industry === selectedIndustry);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Work"
          subtitle="Discover how we've helped businesses transform and thrive in the digital age"
        />

        {/* Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 glass rounded-full mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 text-primary" />
            <span className="text-silver">
              {selectedIndustry === "All" ? "Filter by Industry" : selectedIndustry}
            </span>
          </button>

          {/* Filter Buttons */}
          <div
            className={cn(
              "flex flex-wrap gap-3 justify-center",
              showFilters ? "flex" : "hidden md:flex"
            )}
          >
            {industries.map((industry) => {
              const count =
                industry === "All"
                  ? projects.length
                  : projects.filter((p) => p.industry === industry).length;
              return (
                <motion.button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    selectedIndustry === industry
                      ? "bg-primary text-white glow-primary"
                      : "glass text-silver hover:text-white hover:border-primary/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {industry}
                  <span className="ml-2 text-xs opacity-70">({count})</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                currentPage === 1
                  ? "text-silver/30 cursor-not-allowed"
                  : "text-silver hover:text-white hover:bg-primary/20"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "w-10 h-10 rounded-lg font-medium transition-all duration-300",
                    currentPage === page
                      ? "bg-primary text-white glow-primary"
                      : "text-silver hover:text-white hover:bg-primary/20"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                currentPage === totalPages
                  ? "text-silver/30 cursor-not-allowed"
                  : "text-silver hover:text-white hover:bg-primary/20"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Results Info */}
        {filteredProjects.length > 0 && (
          <motion.p
            className="text-center text-silver/60 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Showing {startIndex + 1}-{Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
          </motion.p>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-silver text-lg">
              No projects found in this industry.
            </p>
            <button
              onClick={() => setSelectedIndustry("All")}
              className="mt-4 text-primary hover:text-primary-light transition-colors"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
