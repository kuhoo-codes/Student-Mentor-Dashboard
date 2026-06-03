import { HealthBadge } from "@/components/HealthBadge";
import { ProgressBar } from "@/components/ProgressBar";
import type { Project } from "@/types/project";

type ProjectListProps = {
  projects: Project[];
  selectedProjectId: string;
  onSelectProject: (project: Project) => void;
};

export function ProjectList({
  projects,
  selectedProjectId,
  onSelectProject
}: ProjectListProps) {
  return (
    <section className="card" aria-labelledby="project-list-title">
      <h2 id="project-list-title">Projects</h2>
      <div className="project-list">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;

          return (
            <button
              aria-pressed={isSelected}
              className={`project-list-item${
                isSelected ? " project-list-item--selected" : ""
              }`}
              key={project.id}
              onClick={() => onSelectProject(project)}
              type="button"
            >
              <div className="project-list-item-header">
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
  );
}
