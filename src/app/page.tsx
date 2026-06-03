"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

function clampProgress(value: number) {
  return Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0));
}

function createParentReport(project: Project) {
  return `${project.studentName} is working on ${project.title}. The project is currently ${project.progress}% complete and is marked as ${project.health}. The current milestone is ${project.milestone}. Recommended next steps are: ${project.nextActions.join(", ")}.`;
}

function HealthBadge({ health }: { health: Project["health"] }) {
  const className = `health-badge health-badge--${health
    .toLowerCase()
    .replaceAll(" ", "-")}`;

  return <span className={className}>{health}</span>;
}

function ProgressBar({ value }: { value: number }) {
  const progress = clampProgress(value);

  return (
    <div className="progress">
      <div className="progress-label">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div
        aria-label={`Project progress ${progress}%`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        className="progress-track"
        role="progressbar"
      >
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0] ?? null
  );
  const [parentReport, setParentReport] = useState<string | null>(null);

  function selectProject(project: Project) {
    setSelectedProject(project);
    setParentReport(null);
  }

  function generateParentReport() {
    if (selectedProject) {
      setParentReport(createParentReport(selectedProject));
    }
  }

  if (!selectedProject) {
    return (
      <main className="page">
        <h1>Student Projects Dashboard</h1>
        <section className="card">
          <h2>No student projects available yet.</h2>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="header">
        <h1>Student Projects Dashboard</h1>
        <p>
          Review student project progress and generate a simple parent report
          from mock data.
        </p>
      </header>

      <section className="layout">
        <section className="card">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => {
              const isSelected = project.id === selectedProject.id;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`project-button${isSelected ? " selected" : ""}`}
                  key={project.id}
                  onClick={() => selectProject(project)}
                  type="button"
                >
                  <div className="project-row">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.studentName}</p>
                    </div>
                    <HealthBadge health={project.health} />
                  </div>
                  <ProgressBar value={project.progress} />
                </button>
              );
            })}
          </div>
        </section>

        <section className="card">
          <div className="detail-header">
            <div>
              <p className="student-name">{selectedProject.studentName}</p>
              <h2>{selectedProject.title}</h2>
            </div>
            <HealthBadge health={selectedProject.health} />
          </div>

          <div className="section">
            <h3>Progress</h3>
            <ProgressBar value={selectedProject.progress} />
          </div>

          <div className="section">
            <h3>Current Milestone</h3>
            <p>{selectedProject.milestone}</p>
          </div>

          <div className="section">
            <h3>Next Actions</h3>
            <ul>
              {selectedProject.nextActions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>Parent Report</h3>
            <button
              className="report-button"
              onClick={generateParentReport}
              type="button"
            >
              Generate Parent Report
            </button>
            {parentReport ? <p className="report">{parentReport}</p> : null}
          </div>
        </section>
      </section>
    </main>
  );
}
