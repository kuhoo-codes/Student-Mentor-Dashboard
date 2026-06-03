"use client";

import { useState } from "react";
import { ProjectDetailCard } from "@/components/ProjectDetailCard";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

function createParentReport(project: Project): string {
  return `${project.studentName} is working on ${project.title}. The project is currently ${project.progress}% complete and is marked as ${project.health}. The current milestone is ${project.milestone}. Recommended next steps are: ${project.nextActions.join(", ")}.`;
}

export function ProjectDashboard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0] ?? null
  );
  const [parentReport, setParentReport] = useState<string | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setParentReport(null);
  };

  const handleGenerateReport = () => {
    if (selectedProject) {
      setParentReport(createParentReport(selectedProject));
    }
  };

  if (!selectedProject) {
    return (
      <section className="card">
        <h2>No student projects available yet.</h2>
      </section>
    );
  }

  return (
    <section className="dashboard-grid" aria-label="Student project dashboard">
      <ProjectList
        onSelectProject={handleSelectProject}
        projects={projects}
        selectedProjectId={selectedProject.id}
      />
      <ProjectDetailCard
        onGenerateReport={handleGenerateReport}
        parentReport={parentReport}
        project={selectedProject}
      />
    </section>
  );
}
