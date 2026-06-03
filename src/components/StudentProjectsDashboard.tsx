"use client";

import { useState } from "react";
import { ProjectDetailCard } from "@/components/ProjectDetailCard";
import { ProjectList } from "@/components/ProjectList";
import { ParentReportPreview } from "@/components/ParentReportPreview";
import { projects } from "@/data/projects";
import type { ParentReport, StudentProject } from "@/types/project";

export function StudentProjectsDashboard() {
  const initialProject = projects[0] ?? null;
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(
    initialProject
  );
  const [parentReport, setParentReport] = useState<ParentReport | null>(null);

  const handleSelectProject = (project: StudentProject) => {
    setSelectedProject(project);
    setParentReport(null);
  };

  if (!selectedProject) {
    return (
      <section className="dashboard-card empty-state">
        <h2>No student projects available yet.</h2>
        <p>Add mock project data to show the dashboard.</p>
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

      <aside className="dashboard-detail-stack">
        <ProjectDetailCard
          onGenerateReport={setParentReport}
          project={selectedProject}
        />
        <ParentReportPreview report={parentReport} />
      </aside>
    </section>
  );
}
