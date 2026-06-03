import { HealthBadge } from "@/components/HealthBadge";
import { ProgressBar } from "@/components/ProgressBar";
import type { StudentProject } from "@/types/project";

type ProjectListProps = {
  projects: StudentProject[];
  selectedProjectId: string;
  onSelectProject: (project: StudentProject) => void;
};

export function ProjectList({
  projects,
  selectedProjectId,
  onSelectProject
}: ProjectListProps) {
  return (
    <section className="dashboard-card" aria-labelledby="project-list-title">
      <h2 id="project-list-title">Project List</h2>
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
                  <h3>{project.projectTitle}</h3>
                  <p>{project.studentName}</p>
                </div>
                <div className="project-list-status">
                  {isSelected ? (
                    <span className="active-label">Selected</span>
                  ) : null}
                  <HealthBadge status={project.healthStatus} />
                </div>
              </div>
              <ProgressBar value={project.progressPercent} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
